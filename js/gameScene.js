"use strict";

import { Hero } from "./hero";
import { Monster } from "./monster";

// Our scenes
export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameScene" });
  }

  init() {}

  preload() {
    //Map
    this.load.image("tiles", "../assets/tilemaps/images/atakala.png");
    this.load.tilemapTiledJSON("map", "../assets/tilemaps/atakala_map.json");

    //Hero
    this.load.atlas(
      "hero",
      "../assets/sprites/images/hero-sheet.png",
      "../assets/sprites/hero.json"
    );
    this.load.atlas(
      "monster",
      "../assets/sprites/images/monster-sheet.png",
      "../assets/sprites/monster.json"
    );
    this.load.atlas(
      "pentagramme",
      "../assets/sprites/images/pentagramme.png",
      "../assets/sprites/pentagramme.json"
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
    sorciere = new Hero(this, 800, 600, 50, "hero", "sorciere", 32, 32);
    this.add.existing(sorciere);

    this.physics.add.collider(sorciere, layer2);
    this.physics.add.collider(sorciere, layer5);
    this.physics.add.collider(sorciere, layer6);

    layer2.setCollisionByExclusion([-1]);
    layer5.setCollisionByExclusion([-1]);
    layer6.setCollisionByExclusion([-1]);

    //Pour que les monstres passent sous la porte...
    layer2.setDepth(100);

    mapLayers.set("decor", layer1);
    mapLayers.set("chemins", layer3);
    mapLayers.set("pnj", layer4);
    mapLayers.set("mur_invisible_sans_porte", layer5);
    mapLayers.set("porte_invisible", layer6);
    mapLayers.set("mur", layer2);

    //Evite les lignes noires autour des tiles
    this.cameras.main.roundPixels = true;

    //Autres
    cursors = this.input.keyboard.createCursorKeys();
    this.cameras.main.startFollow(sorciere, true, 0.08, 0.08);

    //this.physics.world.on('collisionStart', monstreTouche);

    let level = 1;
    cibleMonstre = [835, 403];
    // player monster
    genereEnnemis(this, cibleMonstre);
  }

  update() {}

  end() {}
}
