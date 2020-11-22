"use strict";

export class Mine extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, z, texture, type) {
    super(scene, x, y, type, 0);

    this.setScale(1);
    this.setDepth(z);
    this.dureeDeVie = 10000;
    this.creeAnimations(scene, texture);
    this.scene.physics.world.enable(this);
    this.etat = "pose";
    this.play("pose");
    setTimeout(() => {
      this.explose();
    }, this.dureeDeVie);
  }

  explose() {
    if (this.etat == "pose") {
      this.etat = "end";
      this.play("end");
      this.scene.physics.world.disable(this);
    }
  }

  creeAnimations(scene, texture) {
    scene.anims.create({
      key: "pose",
      frames: scene.anims.generateFrameNames(texture, {
        start: 0,
        end: 9,
        zeroPad: 1,
        prefix: texture + " ",
        suffix: ".png",
      }),
      frameRate: 4,
      repeat: 0,
      repeatDelay: 0,
      yoyo: false,
      skipMissedFrames: true,
      defaultTextureKey: null,
      delay: 0,
      frameRate: null,
      duration: null,
      timeScale: 1,
      showOnStart: false,
      hideOnComplete: false,
    });

    scene.anims.create({
      key: "end",
      frames: scene.anims.generateFrameNames(texture, {
        start: 9,
        end: 15,
        zeroPad: 0,
        prefix: texture + " ",
        suffix: ".png",
      }),
      frameRate: 0.5,
      repeat: 1,
      repeatDelay: 0,
      yoyo: false,
      skipMissedFrames: true,
      defaultTextureKey: null,
      delay: 0,
      frameRate: null,
      duration: null,
      timeScale: 1,
      showOnStart: false,
      hideOnComplete: true,
    });
  }
}
