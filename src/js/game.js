"use strict";

import Phaser from "./imports/phaser.min.js";
import { GameScene } from "./scenes/gameScene";
import { TitleScene } from "./scenes/titleScene";

class MyGame extends Phaser.Game {
  constructor() {
    this.gameScene = new GameScene();
    this.titleScene = new TitleScene();

    //* Game scene */
    this.config = {
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

    this.game = new Phaser.Game(config);

    // load scenes
    this.game.scene.add("titleScene", titleScene);
    this.game.scene.add("game", gameScene);

    // start title
    this.game.scene.start("titleScene");
  }
}

window.onload = () => {
  new MyGame();
};
