"use strict";

import { GameScene } from "./gameScene";
import { TitleScene } from "./titleScene";

var gameScene = new GameScene();
var titleScene = new TitleScene();

//* Game scene */
var config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1000,
  height: 800,
  pixelArt: true,
  physics: {
    default: "arcade",
  },
  scene: {},
};

var game = new Phaser.Game(config);

// load scenes
game.scene.add("titleScene", titleScene);
game.scene.add("game", gameScene);

// start title
game.scene.start("titleScene");
