"use strict";

export class TitleScene extends Phaser.Scene {
  constructor(theGame) {
    super({ key: "titleScene" });
  }

  preload() {
    this.load.image("background", "./src/assets/images/background.png");
  }

  create() {
    var bg = this.add.sprite(0, 0, "background");
    bg.setOrigin(0, 0);

    var text = this.add.text(300, 300, "Welcome to my game !!!", {
      fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
      fontSize: "35px",
      backgroundColor: "grey",
      color: "white",
    });
    text.setInteractive({ useHandCursor: true });
    text.on("pointerdown", () => this.clickButton());
  }

  clickButton() {
    this.scene.start("gameScene");
  }
}
