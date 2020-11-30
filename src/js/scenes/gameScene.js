"use strict";

import { Sorciere } from "../units/sorciere";
import { Monster } from "../units/monster";
import { Pentagramme } from "../sprites/pentagramme";
import { Mine } from "../sprites/mine";
import { Niveau } from "../game/niveau";
import { MonsterBoss } from "../units/monsterBoss";

// Our scenes
export class GameScene extends Phaser.Scene {
  constructor(niveauDuJeu) {
    super({ key: "gameScene" });

    this.niveauDuJeu = niveauDuJeu;
    this.sorciere;
    this.doorKeeper;
    this.mapLayers = new Map();
    this.monstres;
    this.mines;
    this.pentagrammes = new Map();
    this.spaceVerrou = false;
    this.textScore;
    this.textMonstresPasses;
    this.score = 0;
    this.nbMonstresMorts;
    this.nbMonstresPasses;
    this.textMonstresMorts;
    this.nbMontresTotal;
    this.bossDeFinDeNiveau;
    this.bossDeFinDeNiveauVaincu;
    this.bossDeFinDeNiveauFight;
    this.finDuJeu;
    this.delaiVagueMonstre = 5000;
    //Porte et Objectif des montres
    this.coordonneesPorte = [835, 403];
  }

  init() {}

  preload() {
    //Map
    this.load.image("tiles", "./src/assets/tilemaps/images/atakala.png");
    this.load.tilemapTiledJSON("map", "./src/assets/tilemaps/atakala_map.json");

    //Hero
    this.load.atlas(
      "hero",
      "./src/assets/sprites/images/hero-sheet100.png",
      "./src/assets/sprites/hero100.json"
    );

    //Monstres
    this.load.atlas(
      "monster-sheet",
      "./src/assets/sprites/images/monster-sheet.png",
      "./src/assets/sprites/monster.json"
    );

    //Pentagrammes
    this.load.atlas(
      "pentagramme",
      "./src/assets/sprites/images/pentagramme.png",
      "./src/assets/sprites/pentagramme.json"
    );

    //Mines
    this.load.atlas(
      "bomb-sheet",
      "./src/assets/sprites/images/bomb-sheet.png",
      "./src/assets/sprites/bomb.json"
    );

    //Mines
    this.load.atlas(
      "door-sheet",
      "./src/assets/sprites/images/door.png",
      "./src/assets/sprites/door.json"
    );

    //Image coeur/Mana
    this.load.image("coeur", "./src/assets/images/heart.png");
    this.load.image("mana", "./src/assets/images/mana.png");
  }

  create() {
    this.score = 0;

    this.cameras.main.setBounds(32, 32, 1600, 1600);
    this.physics.world.setBounds(0, 0, 1600, 1600);

    //Map
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("atakala", "tiles");

    //Tiles de la map misent en ram du GPU (createDynamicLayer),
    //évite les lignes noires autour des tiles
    const layer1 = map.createDynamicLayer("decor", tileset, 32, 32);
    const layer2 = map.createDynamicLayer("mur", tileset, 32, 32);
    const layer3 = map.createStaticLayer("chemins", tileset, 32, 32);
    const layer4 = map.createStaticLayer("pnj", tileset, 32, 32);
    const layer5 = map.createDynamicLayer(
      "mur_invisible_sans_porte",
      tileset,
      32,
      32
    );

    layer2.setCollisionByExclusion([-1]);
    layer5.setCollisionByExclusion([-1]);

    //Pour que les monstres passent sous la porte...
    layer2.setDepth(100);
    //Pour les pnj sur le mur
    layer4.setDepth(101);

    this.doorKeeper = this.physics.add.staticSprite(
      this.coordonneesPorte[0] - 3,
      this.coordonneesPorte[1] - 105,
      "door-sheet"
    );

    this.physics.world.enable(this.doorKeeper);

    this.mapLayers.set("decor", layer1);
    this.mapLayers.set("chemins", layer3);
    this.mapLayers.set("pnj", layer4);
    this.mapLayers.set("mur_invisible_sans_porte", layer5);
    // this.mapLayers.set("mur", layer2);

    // player hero
    this.sorciere = new Sorciere(
      this,
      800,
      600,
      100,
      "hero",
      "sorciere",
      10,
      300
    );

    // 0 : Dynamic body
    //1 : Static body
    this.add.existing(this.sorciere, 0);
    this.physics.add.collider(this.sorciere, layer5);

    //Affichage ecran
    this.imageGroupCoeur = this.add.group();
    this.imageGroupMana = this.add.group();

    //Evite les lignes noires autour des tiles
    this.cameras.main.roundPixels = true;

    //Autres
    this.cursors = this.input.keyboard.createCursorKeys();
    this.cameras.main.startFollow(this.sorciere, true, 0.08, 0.08);

    //Porte
    this.anims.create({
      key: "door-blush",
      frames: this.anims.generateFrameNames("door-sheet", {
        start: 0,
        end: 11,
        zeroPad: 1,
        prefix: "door" + " ",
        suffix: ".png",
      }),
      frameRate: 20,
      repeat: 0,
    });

    this.physics.add.collider(
      this.sorciere,
      this.doorKeeper,
      () => {
        this.doorKeeper.play("door-blush");
        this.sorciere.ejecteDeLaPorte();
      },
      null,
      null
    );

    //score et autres
    this.textScore = this.add.text(780, 5, "Score : " + this.score, {
      fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
      fontSize: "20px",
      //backgroundColor: "grey",
      color: "white",
    });
    this.textScore.setScrollFactor(0).setDepth(1000);

    this.textMonstresPasses = this.add.text(
      780,
      30,
      "Monstres passés : " + this.nbMonstresPasses + "/10",
      {
        fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
        fontSize: "20px",
        //backgroundColor: "grey",
        color: "white",
      }
    );
    this.textMonstresPasses.setScrollFactor(0).setDepth(1000);

    this.textMonstresMorts = this.add.text(
      780,
      55,
      "Monstres tués : " + this.nbMonstresMorts + "/" + this.nbMontresTotal,
      {
        fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
        fontSize: "20px",
        //backgroundColor: "grey",
        color: "white",
      }
    );

    this.textMonstresMorts.setScrollFactor(0).setDepth(1000);

    // player monster
    this.monstres = this.add.group();
    //mines groupe
    this.mines = this.add.group();

    this.startPlaying();
  }

  afficheText(myText, time, textX, textY) {
    let tempText = this.add
      .text(textX, textY, myText, {
        fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
        fontSize: "40px",
        //backgroundColor: "grey",
        color: "white",
      })
      .setScrollFactor(0)
      .setDepth(1000);
    setTimeout(() => {
      tempText.destroy();
    }, time);
  }

  startPlaying() {
    this.nbMonstresMorts = 0;
    this.nbMonstresPasses = 0;
    this.textMonstresMorts;
    this.nbMontresTotal = this.niveauDuJeu.nbMonstresParZone * 5;
    this.bossDeFinDeNiveauVaincu = false;
    this.bossDeFinDeNiveauFight = false;
    this.finDuJeu = false;
    this.majPtsVieEcran();
    this.majPtsManaEcran();

    this.textMonstresPasses.setText(
      "Monstres passés : " + this.nbMonstresPasses + "/10"
    );
    this.textMonstresMorts.setText(
      "Monstres tués : " + this.nbMonstresMorts + "/" + this.nbMontresTotal
    );

    if (this.niveauDuJeu.num > 1) {
      this.afficheText("You won this battle !", 2800, 300, 400);
    } else {
      this.afficheText(
        "Monsters are coming...\nProtect the gate ! ",
        2800,
        300,
        400
      );
      this.generePentagrammes();
    }

    setTimeout(() => {
      this.afficheText(
        "Niveau " + this.niveauDuJeu.num + "... Ready ?",
        3000,
        300,
        400
      );
    }, 3000);

    setTimeout(() => {
      this.genereMonstres(0, this.delaiVagueMonstre);
    }, 6000);
  }

  majPtsVieEcran() {
    this.imageGroupCoeur.clear(true);

    for (let index = 0; index < this.sorciere.ptsVie; index++) {
      let image = this.add
        .image(30 + index * 10, 760, "coeur")
        .setScrollFactor(0)
        .setDepth(1000);
      this.imageGroupCoeur.add(image);
    }

    this.checkFinDeNiveau();
  }

  majPtsManaEcran() {
    if (this.finDuJeu) {
      return;
    }
    this.imageGroupMana.clear(true);

    for (let index = 0; index < this.sorciere.mana; index++) {
      let image = this.add
        .image(870 + index * 10, 760, "mana")
        .setScrollFactor(0)
        .setDepth(1000);
      this.imageGroupMana.add(image);
    }
  }

  hitMine(mine, unit) {
    setTimeout(() => {
      unit.perdPtDeVie();
    }, 1000);
    mine.explose();
  }

  augmenteScore(nb) {
    this.score = this.score + nb;
    this.textScore.setText("Score : " + this.score);
  }

  augmenteMonstresPasses() {
    this.nbMonstresPasses = this.nbMonstresPasses + 1;
    this.textMonstresPasses.setText(
      "Monstres passés : " + this.nbMonstresPasses + "/10"
    );
    this.checkFinDeNiveau();
  }

  augmenteMonstresMort() {
    if (this.bossDeFinDeNiveauFight) {
      this.augmenteScore(this.niveauDuJeu.num * 100);
      this.bossDeFinDeNiveauVaincu = true;
    } else {
      this.nbMonstresMorts = this.nbMonstresMorts + 1;
      this.textMonstresMorts.setText(
        "Monstres tués : " + this.nbMonstresMorts + "/" + this.nbMontresTotal
      );
      this.augmenteScore(this.niveauDuJeu.num * 10);
    }
    this.checkFinDeNiveau();
  }

  generePentagrammes() {
    let nombreDePentagramme = 5;
    let coordonneesPentagrammeX = [400, 400, 800, 1200, 1200];
    let coordonneesPentagrammeY = [800, 1200, 1400, 1200, 800];

    for (let i = 0; i < nombreDePentagramme; i++) {
      let nomPentagramme = "pentagramme" + i;
      let temp = new Pentagramme(
        this,
        coordonneesPentagrammeX[i],
        coordonneesPentagrammeY[i],
        5,
        "pentagramme",
        nomPentagramme
      );
      this.add.existing(temp, 1);
      this.pentagrammes.set(nomPentagramme, temp);
    }
  }

  genereBossFinDeNiveau() {
    this.bossDeFinDeNiveauFight = true;
    this.monstres.clear(true);

    let ptDepart = this.pentagrammes.get("pentagramme2");

    let idMonstre = "monstreBoss" + this.niveauDuJeu.num;

    this.bossDeFinDeNiveau = new MonsterBoss(
      this,
      ptDepart.x,
      ptDepart.y,
      50,
      this.sorciere,
      "monster-sheet",
      "boss",
      idMonstre,
      10,
      this.niveauDuJeu.vitesseBoss
    );

    this.physics.add.collider(
      this.bossDeFinDeNiveau,
      this.sorciere,
      () => {
        if (this.bossDeFinDeNiveau.etat == "actif") {
          this.bossDeFinDeNiveau.corrigeTrajectoire();
          this.sorciere.perdPointsDeVie(1);
        }
      },
      null,
      null
    );

    this.add.existing(this.bossDeFinDeNiveau, 0);
    this.bossDeFinDeNiveau.avance();
    this.bossDeFinDeNiveau.corrigeTrajectoire();
  }

  checkFinDeNiveau() {
    if (this.sorciere.ptsVie < 1) {
      this.finDeNiveau(1);
      return;
    }

    if (this.nbMonstresPasses > 9) {
      this.finDeNiveau(2);
      return;
    }

    if (this.nbMonstresPasses + this.nbMonstresMorts == this.nbMontresTotal) {
      if (this.bossDeFinDeNiveauFight && this.bossDeFinDeNiveauVaincu) {
        this.finDeNiveau(3);
      } else {
        this.afficheText("Boss is coming... For you !", 5000, 500, 500);
        this.spaceVerrou = true;
        setTimeout(() => {
          this.genereBossFinDeNiveau();
          this.spaceVerrou = true;
        }, 5000);
      }
    }
  }

  finDeNiveau(numFinNiveau) {
    switch (numFinNiveau) {
      case 0:
        break;

      case 1:
        //You're dead
        this.arreteJeu();
        this.sorciere.dead();
        this.afficheText("You're dead... Too weak", 5000, 300, 500);
        setTimeout(() => {
          this.scene.start("endScene");
        }, 5000);

        break;

      case 2:
        //You failed!
        this.arreteJeu();
        this.afficheText("You failed ! Too dumb", 5000, 300, 500);
        setTimeout(() => {
          this.scene.start("endScene");
        }, 5000);
        break;

      case 3:
        this.niveauDuJeu.getNiveauSuperieur();
        this.startPlaying();
        break;
      default:
        () => {};
    }
  }

  arreteJeu() {
    this.finDuJeu = true;
    if (this.bossDeFinDeNiveau != null) {
      this.bossDeFinDeNiveau.etat = "inactif";
    }

    this.monstres.children.each((monstre) => {
      monstre.etat = "inactif";
    });

    this.mines.children.each((mine) => {
      mine.etat = "end";
    });
  }

  update() {
    if (this.finDuJeu) {
      return;
    }

    if (this.input.keyboard.addKey("SPACE").isUp) {
      this.spaceVerrou = false;
    }

    if (
      this.input.keyboard.addKey("SPACE").isDown &&
      this.sorciere.etat == "actif" &&
      this.sorciere.mana > 0
    ) {
      if (!this.spaceVerrou) {
        let temp = new Mine(
          this,
          this.sorciere.x,
          this.sorciere.y,
          5,
          "bomb-sheet",
          "bombe"
        );
        this.add.existing(temp, 1);
        this.mines.add(temp);
        this.sorciere.perdPointsDeMana(1);
        this.spaceVerrou = true;

        // this.monstres;
        this.physics.add.overlap(temp, this.monstres, this.hitMine, null, null);

        if (this.bossDeFinDeNiveauFight) {
          this.physics.add.overlap(
            temp,
            this.bossDeFinDeNiveau,
            this.hitMine,
            null,
            null
          );
        }
      }
    }

    if (this.sorciere.etat == "actif") {
      this.sorciere.bougeX(this.cursors.left.isDown, this.cursors.right.isDown);
      this.sorciere.bougeY(this.cursors.up.isDown, this.cursors.down.isDown);

      if (
        this.cursors.up.isUp &&
        this.cursors.down.isUp &&
        this.cursors.right.isUp &&
        this.cursors.left.isUp
      ) {
        this.sorciere.resteImmobile("actif", 0, 0);
      }
    }
  }

  genereMonstres(numIteration, delaiVagueMonstre) {
    if (this.bossDeFinDeNiveauFight) {
      return;
    }

    let numeroMonstre = 0;
    let departAleatoireDesMonstres = 0;

    for (let p of this.pentagrammes.values()) {
      if (this.finDuJeu) {
        return;
      }
      departAleatoireDesMonstres = Math.floor(Math.random() * Math.floor(4000));

      setTimeout(
        (unPentagramme) => {
          {
            if (this.bossDeFinDeNiveauFight || this.finDuJeu) {
              return;
            }
            let idMonstre = "monstre" + numeroMonstre + numIteration;
            let temp = new Monster(
              this,
              unPentagramme.x,
              unPentagramme.y,
              50,
              this.coordonneesPorte,
              "monster-sheet",
              "monstre",
              idMonstre,
              1,
              this.niveauDuJeu.vitesseMonstre
            );

            let layerTemp = this.mapLayers.get("mur_invisible_sans_porte");
            this.monstres.add(temp);

            this.physics.add.collider(
              temp,
              layerTemp,
              () => {
                temp.eviteObstacle();
              },
              null,
              null
            );

            this.physics.add.collider(
              temp,
              this.sorciere,
              () => {
                temp.eviteObstacle();
                if (temp.etat == "actif") {
                  this.sorciere.perdPointsDeVie(10);
                }
              },
              null,
              null
            );

            this.add.existing(temp, 0);
            temp.avance();
          }
        },
        departAleatoireDesMonstres,
        p
      );

      numeroMonstre++;
    }

    numIteration++;

    if (numIteration < this.niveauDuJeu.nbMonstresParZone) {
      if (this.finDuJeu) {
        return;
      }
      setTimeout(() => {
        this.genereMonstres(numIteration, delaiVagueMonstre);
      }, delaiVagueMonstre + departAleatoireDesMonstres);
    }
  }
}
