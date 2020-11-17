"use strict";

// import Phaser from "./imports/phaser.min.js";
import { GameScene } from "./scenes/gameScene";
import { TitleScene } from "./scenes/titleScene";

class MyGame extends Phaser.Game {
  constructor() {
    // super(1200, 800, Phaser.CANVAS, "content", null);

    const config = {
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

    super(config);

    // this.gameScene = new GameScene();
    // this.titleScene = new TitleScene();

    // load scenes
    // this.game.scene.add("titleScene", this.titleScene);
    // this.game.scene.add("game", this.gameScene);

    this.scene.add("titleScene", new TitleScene());
    this.scene.add("game", new GameScene());

    // start title
    this.scene.start("titleScene");
  }
}

window.onload = () => {
  new MyGame();
};
