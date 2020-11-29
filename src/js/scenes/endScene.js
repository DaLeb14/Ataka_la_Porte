"use strict";

export class EndScene extends Phaser.Scene {
  constructor(niveauDuJeu, gamePlay) {
    super({ key: "endScene" });
    this.gamePlay = gamePlay;
    this.niveauDuJeu = niveauDuJeu;
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
      "This is the end ! Niveau :" +
        this.niveauDuJeu.num +
        " score : " +
        this.gamePlay.score,
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
    this.niveauDuJeu.raz();
    this.scene.start("titleScene");
  }
}
