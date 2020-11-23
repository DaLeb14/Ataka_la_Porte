"use strict";

import { Sorciere } from "../units/sorciere";
import { Monster } from "../units/monster";
import { Pentagramme } from "../sprites/pentagramme";
import { Mine } from "../sprites/mine";
import { Niveau } from "./game/niveau";

// Our scenes
export class GameScene extends Phaser.Scene {
  constructor(niveauDuJeu) {
    super({ key: "gameScene" });

    this.sorciere;
    this.mapLayers = new Map();
    this.monstres;
    this.pentagrammes = new Map();
    this.spaceVerrou = false;
    this.score = 0;
    this.textScore;
    this.nbMonstresPasse = 0;
    this.textMonstresPasse;
    this.niveau;
    this.textNiveau;
  }

  init() {}

  preload() {
    //Map
    this.load.image("tiles", "./src/assets/tilemaps/images/atakala.png");
    this.load.tilemapTiledJSON("map", "./src/assets/tilemaps/atakala_map.json");

    //Hero
    this.load.atlas(
      "hero",
      "./src/assets/sprites/images/hero-sheet.png",
      "./src/assets/sprites/hero.json"
    );

    //Monstres
    this.load.atlas(
      "monster-sheet",
      "./src/assets/sprites/images/monster-sheet2.png",
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

    //Image coeur/Mana
    this.load.image("coeur", "./src/assets/images/heart.png");
    this.load.image("mana", "./src/assets/images/mana.png");
  }

  create() {
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
    const layer6 = map.createStaticLayer("porte_invisible", tileset, 32, 32);

    // player hero
    this.sorciere = new Sorciere(
      this,
      800,
      600,
      100,
      "hero",
      "sorciere",
      10,
      32
    );

    //Affichage ecran
    this.imageGroupCoeur = this.add.group();
    this.majPtsVieEcran();
    this.imageGroupMana = this.add.group();
    this.majPtsManaEcran();

    // 0 : Dynamic body
    //1 : Static body
    this.add.existing(this.sorciere, 0);

    this.physics.add.collider(this.sorciere, layer2);
    this.physics.add.collider(this.sorciere, layer5);
    this.physics.add.collider(this.sorciere, layer6);

    layer2.setCollisionByExclusion([-1]);
    layer5.setCollisionByExclusion([-1]);
    layer6.setCollisionByExclusion([-1]);

    //Pour que les monstres passent sous la porte...
    layer2.setDepth(100);
    //Pour les pnj sur le mur
    layer4.setDepth(101);

    this.mapLayers.set("decor", layer1);
    this.mapLayers.set("chemins", layer3);
    this.mapLayers.set("pnj", layer4);
    this.mapLayers.set("mur_invisible_sans_porte", layer5);
    this.mapLayers.set("porte_invisible", layer6);
    this.mapLayers.set("mur", layer2);

    //Evite les lignes noires autour des tiles
    this.cameras.main.roundPixels = true;

    //Autres
    this.cursors = this.input.keyboard.createCursorKeys();
    this.cameras.main.startFollow(this.sorciere, true, 0.08, 0.08);

    //Objectif des montres
    this.coordonneesPorte = [835, 403];

    //score et autres
    this.textScore = this.add.text(780, 5, "Score : " + this.score, {
      fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
      fontSize: "20px",
      //backgroundColor: "grey",
      color: "white",
    });
    this.textScore.setScrollFactor(0).setDepth(1000);

    this.textMonstresPasse = this.add.text(
      780,
      30,
      "Monstres passés : " + this.nbMonstresPasse + "/10",
      {
        fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
        fontSize: "20px",
        //backgroundColor: "grey",
        color: "white",
      }
    );
    this.textMonstresPasse.setScrollFactor(0).setDepth(1000);

    // player monster
    this.monstres = this.add.group();
    this.genereEnnemis();
  }

  hitMine(mine, unit) {
    setTimeout(() => {
      unit.brule();
    }, 1000);
    mine.explose();
  }

  augmenteScore(nb) {
    this.score = this.score + nb;
    this.textScore.setText("Score : " + this.score);
  }

  augmenteMonstresPasses() {
    this.nbMonstresPasse = this.nbMonstresPasse + 1;
    this.textMonstresPasse.setText(
      "Monstres passés : " + this.nbMonstresPasse + "/10"
    );
    checkFinDeNiveau();
  }

  checkFinDeNiveau() {
    this.add
      .text(500, 500, "The end !", {
        fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
        fontSize: "40px",
        //backgroundColor: "grey",
        color: "white",
      })
      .setScrollFactor(0)
      .setDepth(1000);
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

    this.scene.checkFinDeNiveau();
  }

  majPtsManaEcran() {
    this.imageGroupMana.clear(true);

    for (let index = 0; index < this.sorciere.mana; index++) {
      let image = this.add
        .image(870 + index * 10, 760, "mana")
        .setScrollFactor(0)
        .setDepth(1000);
      this.imageGroupMana.add(image);
    }
  }

  update() {
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
        this.sorciere.perdPointsDeMana(1);
        this.spaceVerrou = true;

        // this.monstres;
        this.physics.add.overlap(temp, this.monstres, this.hitMine, null, null);
      }
    }
    if (this.sorciere.etat == "actif") {
      if (this.cursors.left.isDown && this.sorciere.x > 32) {
        this.sorciere.gauche();
      } else if (this.cursors.right.isDown && this.sorciere.x < 1600) {
        this.sorciere.droite();
      }

      if (this.cursors.up.isDown && this.sorciere.y > 0) {
        this.sorciere.avance();
      } else if (this.cursors.down.isDown && this.sorciere.y < 1600) {
        this.sorciere.recule();
      }

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

  end() {}

  genereEnnemis() {
    let nombreDePentagramme = 5;
    let nombreDeMonstresParPentagramme = 2; //10;
    let delaiVagueMonstre = 5000;
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

    this.genereMonstres(0, nombreDeMonstresParPentagramme, delaiVagueMonstre);
  }

  genereMonstres(
    numIteration,
    nombreDeMonstresParPentagramme,
    delaiVagueMonstre
  ) {
    let numeroMonstre = 0;
    let departAleatoireDesMonstres = 0;

    for (let p of this.pentagrammes.values()) {
      departAleatoireDesMonstres = Math.floor(Math.random() * Math.floor(4000));

      setTimeout(
        (unPentagramme) => {
          {
            let idMonstre = "monstre" + numeroMonstre + numIteration;
            let temp = new Monster(
              this,
              unPentagramme.x,
              unPentagramme.y,
              50,
              this.coordonneesPorte,
              "monster-sheet",
              idMonstre,
              32,
              32
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
                  this.sorciere.perdPointsDeVie(1);
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

    if (numIteration < nombreDeMonstresParPentagramme) {
      setTimeout(() => {
        this.genereMonstres(
          numIteration,
          nombreDeMonstresParPentagramme,
          delaiVagueMonstre
        );
      }, delaiVagueMonstre + departAleatoireDesMonstres);
    }
  }
}
