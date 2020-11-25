"use strict";

import { MyGame } from "../game.js";

export class EndScene extends Phaser.Scene {
  constructor(theGame) {
    super({ key: "endScene" });
    this.theGame = theGame;
    this.score = theGame.gamePlay.score;
    this.niveau = theGame.niveauDuJeu.num;
  }

  init() {}

  preload() {
    this.load.image("background", "./src/assets/images/background.png");
  }

  create() {
    var bg = this.add.sprite(0, 0, "background");
    bg.setOrigin(0, 0);

    var text = this.add.text(
      300,
      300,
      "This is the end ! Niveau :" + this.niveau + " score : " + this.score,
      {
        fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
        fontSize: "35px",
        backgroundColor: "grey",
        color: "white",
      }
    );
    text.setInteractive({ useHandCursor: true });
    text.on("pointerdown", () => this.clickButton());
  }

  clickButton() {
    this.scene.switch("titleScene");
  }
}
