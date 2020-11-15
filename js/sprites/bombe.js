"use strict";

export class Bombe extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, z, texture, type) {
    super(scene, x, y, type, 0);

    this.setScale(1);

    this.setDepth(z);

    this.creeAnimations(scene, texture);

    this.etat = "explose";
    this.play("explose");
  }

  creeAnimations(scene, texture) {
    scene.anims.create({
      key: "explose",
      frames: scene.anims.generateFrameNames(texture, {
        start: 1,
        end: 25,
        zeroPad: 1,
        prefix: texture + " ",
        suffix: ".png",
      }),
      frameRate: 6,
      repeat: 0,
    });
  }
}
