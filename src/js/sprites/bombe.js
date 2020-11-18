"use strict";

export class Bombe extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, z, texture, type) {
    super(scene, x, y, type, 0);

    this.setScale(1);
    this.setDepth(z);
    //scene.physics.add.existing(this);
    this.creeAnimations(scene, texture);
    this.scene.physics.world.enable(this);

    //this.body.setBounceX(1);
    //???
    //this.body.setVelocity(Phaser.Math.Between(-2, 2), 10);
    this.etat = "pose";
    this.play("pose");
  }

  explose() {
    // this.play("explose");
    // this.etat = "explose";
    //this.remove();
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
      frameRate: 6,
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
      key: "explose",
      frames: scene.anims.generateFrameNames(texture, {
        start: 9,
        end: 25,
        zeroPad: 0,
        prefix: texture + " ",
        suffix: ".png",
      }),
      frameRate: 40,
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
      hideOnComplete: true,
    });
  }
}
