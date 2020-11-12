"use strict";

var config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1000,
  height: 800,
  pixelArt: true,
  physics: {
    default: "arcade",
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var sorciere;
var mapLayers = new Map();
var monstres = new Map();
var pentagrammes = new Map();
var cibleMonstre;

var game = new Phaser.Game(config);

function preload() {
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

function create() {
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

function genereEnnemis(scene, cibleMonstre) {
  let nombreDePentagramme = 5;
  let nombreDeMonstresParPentagramme = 2; //10;
  let delaiVagueMonstre = 5000;
  let coordonneesPentagrammeX = [400, 400, 800, 1200, 1200];
  let coordonneesPentagrammeY = [800, 1200, 1400, 1200, 800];

  for (let i = 0; i < nombreDePentagramme; i++) {
    let nomPentagramme = "pentagramme" + i;
    let temp = new Pentagramme(
      scene,
      coordonneesPentagrammeX[i],
      coordonneesPentagrammeY[i],
      5,
      "pentagramme",
      nomPentagramme,
      32,
      32
    );
    scene.add.existing(temp);
    pentagrammes.set(nomPentagramme, temp);
  }

  genereMonstres(
    scene,
    0,
    nombreDeMonstresParPentagramme,
    delaiVagueMonstre,
    cibleMonstre
  );
}

function genereMonstres(
  scene,
  numIteration,
  nombreDeMonstresParPentagramme,
  delaiVagueMonstre,
  cibleMonstre
) {
  let numeroMonstre = 0;
  let departAleatoireDesMonstres = 0;

  for (let p of pentagrammes.values()) {
    departAleatoireDesMonstres = Math.floor(Math.random() * Math.floor(4000));

    var creationMonstre = function (posPentagramme) {
      let idMonstre = "monstre" + numeroMonstre + numIteration;
      let temp = new Monster(
        scene,
        posPentagramme.x,
        posPentagramme.y,
        50,
        "monster",
        idMonstre,
        32,
        32,
        cibleMonstre
      );
      let layerTemp = mapLayers.get("mur_invisible_sans_porte");

      monstres.set(idMonstre, temp);

      scene.physics.add.collider(
        temp,
        layerTemp,
        function () {
          temp.eviteObstacle();
        },
        null,
        null
      );

      scene.physics.add.collider(
        temp,
        sorciere,
        function () {
          temp.eviteObstacle();
        },
        null,
        null
      );

      scene.add.existing(temp);

      temp.avance();
    };

    setTimeout(function () {
      creationMonstre(p);
    }, departAleatoireDesMonstres);

    numeroMonstre++;
  }

  numIteration++;

  if (numIteration < nombreDeMonstresParPentagramme) {
    setTimeout(function () {
      genereMonstres(
        scene,
        numIteration,
        nombreDeMonstresParPentagramme,
        delaiVagueMonstre,
        cibleMonstre
      );
    }, delaiVagueMonstre + departAleatoireDesMonstres);
  }
}

function update() {
  //sorciere.setAngle(-90).setVelocityX(-200);
  sorciere.body.setVelocityX(0);
  sorciere.body.setVelocityY(0);

  // for (let m of monstres.values())
  // {
  // if(m.direction!="up")
  // {
  // m.avance(cibleMonstre);
  // }
  // }

  if (cursors.left.isDown && sorciere.x > 32) {
    sorciere.direction = "left";
    sorciere.play("walk-left");
    sorciere.body.setVelocityX(-300);
  } else if (cursors.right.isDown && sorciere.x < 1600) {
    sorciere.direction = "right";
    sorciere.play("walk-right");
    sorciere.body.setVelocityX(300);
  }

  if (cursors.up.isDown && sorciere.y > 0) {
    sorciere.direction = "up";
    sorciere.play("walk-up");
    sorciere.body.setVelocityY(-300);
  } else if (cursors.down.isDown && sorciere.y < 1600) {
    sorciere.direction = "down";
    sorciere.play("walk-down");
    sorciere.body.setVelocityY(300);
  }

  if (
    cursors.up.isUp &&
    cursors.down.isUp &&
    cursors.right.isUp &&
    cursors.left.isUp
  ) {
    sorciere.anims.stop();
    sorciere.body.setVelocityX(0);
    sorciere.body.setVelocityY(0);
  }
}
