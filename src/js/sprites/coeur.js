"use strict";

export class Coeur extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, z, texture, type, force) {
    super(scene, x, y, texture, 0);

    this.setScale(1);
    this.setDepth(z);
    this.force = force;
    this.creeAnimations(scene, texture);
    this.scene.physics.world.enable(this);
    this.etat = "actif";
    this.type = type;
    this.directionY = null;
    this.scene.physics.add.overlap(
      this,
      this.scene.sorciere,
      () => {
        this.hitCoeur(this.scene, this.force);
      },
      null,
      null
    );

    this.on(
      "animationcomplete",
      function (animation, frame) {
        if (animation.key === "apparait") {
          this.avance();
        }
      },
      this
    );

    this.play("apparait");
  }

  hitCoeur(myScene, force) {
    myScene.sorciere.ptsVie = myScene.sorciere.ptsVie + force;
    if (myScene.sorciere.ptsVie > myScene.sorciere.ptsVieDeDebut) {
      myScene.sorciere.ptsVie = myScene.sorciere.ptsVieDeDebut;
    }
    myScene.majPtsVieEcran();
    this.destroy();
  }

  avance() {
    if (this.etat != "actif") {
      return;
    }
    this.play("leave");
    this.directionY = "down";
    this.body.setVelocityY(60);
  }

  creeAnimations(scene, texture) {
    scene.anims.create({
      key: "apparait",
      frames: scene.anims.generateFrameNames(texture, {
        start: 0,
        end: 4,
        zeroPad: 1,
        prefix: texture + " ",
        suffix: ".png",
      }),
      frameRate: 1,
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
      key: "leave",
      frames: scene.anims.generateFrameNames(texture, {
        start: 5,
        end: 9,
        zeroPad: 1,
        prefix: texture + " ",
        suffix: ".png",
      }),
      frameRate: 4,
      repeat: -1,
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
  }
}
