"use strict";

import { GameScene } from "./scenes/gameScene";
import { TitleScene } from "./scenes/titleScene";
import { Niveau } from "./game/niveau";

class MyGame extends Phaser.Game {
  constructor() {
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

    const niveauDuJeu = new Niveau(0, 10);
    this.scene.add("titleScene", new TitleScene());
    this.scene.add("game", new GameScene(niveauDuJeu));

    // start title
    this.scene.start("titleScene");
  }
}

window.onload = () => {
  new MyGame();
};
