"use strict";

export class Pentagramme extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, z, texture, type) {
    super(scene, x, y, type, 0);

    this.setScale(1);

    this.setDepth(z);

    this.creeAnimations(scene, texture);

    this.etat = "actif";
    this.play("actif");
  }

  creeAnimations(scene, texture) {
    scene.anims.create({
      key: "actif",
      frames: scene.anims.generateFrameNames(texture, {
        start: 1,
        end: 6,
        zeroPad: 1,
        prefix: texture + " ",
        suffix: ".png",
      }),
      frameRate: 6,
      repeat: -1,
    });

    scene.anims.create({
      key: "stand",
      frames: scene.anims.generateFrameNames(texture, {
        start: 1,
        end: 1,
        zeroPad: 1,
        prefix: texture + " ",
        suffix: ".png",
      }),
      frameRate: 1,
      repeat: 0,
    });
  }
}
