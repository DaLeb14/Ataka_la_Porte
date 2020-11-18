"use strict";

import { Sorciere } from "../units/sorciere";
import { Monster } from "../units/monster";
import { Pentagramme } from "../sprites/pentagramme";
import { Mine } from "../sprites/mine";

// Our scenes
export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameScene" });

    this.sorciere;
    this.mapLayers = new Map();
    this.monstres;
    this.pentagrammes = new Map();
    this.cibleMonstre;
    this.spaceVerrou = false;
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
    this.load.atlas(
      "monster",
      "./src/assets/sprites/images/monster-sheet.png",
      "./src/assets/sprites/monster.json"
    );
    this.load.atlas(
      "pentagramme",
      "./src/assets/sprites/images/pentagramme.png",
      "./src/assets/sprites/pentagramme.json"
    );
    this.load.atlas(
      "bomb",
      "./src/assets/sprites/images/bomb-sheet.png",
      "./src/assets/sprites/bomb.json"
    );
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
      32,
      32
    );

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

    //this.physics.world.on('collisionStart', monstreTouche);

    let level = 1;
    this.cibleMonstre = [835, 403];

    // player monster
    this.monstres = this.add.group();
    this.genereEnnemis();
  }

  hitMine(mine, unit) {
    unit.brule();
    // mine.etat = "end";
    // mine.play("end");
  }

  update() {
    this.sorciere.body.setVelocityX(0);
    this.sorciere.body.setVelocityY(0);

    if (this.input.keyboard.addKey("SPACE").isUp) {
      this.spaceVerrou = false;
    }

    if (this.input.keyboard.addKey("SPACE").isDown) {
      if (!this.spaceVerrou) {
        let temp = new Mine(
          this,
          this.sorciere.x,
          this.sorciere.y,
          5,
          "bomb",
          "bombe",
          32,
          32
        );
        this.add.existing(temp, 1);

        this.spaceVerrou = true;

        this.monstres;
        this.physics.add.overlap(temp, this.monstres, this.hitMine, null, null);
      }
    }

    if (this.cursors.left.isDown && this.sorciere.x > 32) {
      this.sorciere.direction = "left";
      this.sorciere.play("walk-left");
      this.sorciere.body.setVelocityX(-300);
    } else if (this.cursors.right.isDown && this.sorciere.x < 1600) {
      this.sorciere.direction = "right";
      this.sorciere.play("walk-right");
      this.sorciere.body.setVelocityX(300);
    }

    if (this.cursors.up.isDown && this.sorciere.y > 0) {
      this.sorciere.direction = "up";
      this.sorciere.play("walk-up");
      this.sorciere.body.setVelocityY(-300);
    } else if (this.cursors.down.isDown && this.sorciere.y < 1600) {
      this.sorciere.direction = "down";
      this.sorciere.play("walk-down");
      this.sorciere.body.setVelocityY(300);
    }

    if (
      this.cursors.up.isUp &&
      this.cursors.down.isUp &&
      this.cursors.right.isUp &&
      this.cursors.left.isUp
    ) {
      this.sorciere.anims.stop();
      this.sorciere.body.setVelocityX(0);
      this.sorciere.body.setVelocityY(0);
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
        nomPentagramme,
        32,
        32
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
              "monster",
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
