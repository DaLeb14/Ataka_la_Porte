"use strict";

import { GameScene } from "./scenes/gameScene";
import { TitleScene } from "./scenes/titleScene";
import { EndScene } from "./scenes/endScene";
import { Niveau } from "./game/niveau";

export class MyGame extends Phaser.Game {
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

    this.niveauDuJeu = new Niveau();
    this.gamePlay = new GameScene(this.niveauDuJeu);

    this.scene.add("titleScene", new TitleScene(this));

    this.scene.add("gameScene", this.gamePlay);

    this.scene.add("endScene", new EndScene(this.niveauDuJeu, this.gamePlay));

    // start title
    this.scene.start("titleScene");
  }
}

window.onload = () => {
  new MyGame();
};
