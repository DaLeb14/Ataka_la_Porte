"use strict";
import { Unit } from "./unit";
//import { Physics } from "./import/@babylonjs/core/Physics/physicsEngineComponent";

export class Sorciere extends Unit {
  constructor(scene, x, y, z, texture, type, hp, damage) {
    super(scene, x, y, z, texture, type, hp, damage);

    //Agrandissement
    this.setScale(1.2);

    this.creeAnimations(scene, texture);

    this.direction = "down";
    this.play("walk-down");
  }

  creeAnimations(scene, texture) {
    scene.anims.create({
      key: "walk-left",
      frames: scene.anims.generateFrameNames(texture, {
        start: 10,
        end: 12,
        zeroPad: 1,
        prefix: texture + " ",
        suffix: ".png",
      }),
      frameRate: 3,
      repeat: -1,
    });

    scene.anims.create({
      key: "walk-right",
      frames: scene.anims.generateFrameNames(texture, {
        start: 4,
        end: 6,
        zeroPad: 1,
        prefix: texture + " ",
        suffix: ".png",
      }),
      frameRate: 3,
      repeat: -1,
    });

    scene.anims.create({
      key: "walk-up",
      frames: scene.anims.generateFrameNames(texture, {
        start: 1,
        end: 3,
        zeroPad: 1,
        prefix: texture + " ",
        suffix: ".png",
      }),
      frameRate: 3,
      repeat: -1,
    });

    scene.anims.create({
      key: "walk-down",
      frames: scene.anims.generateFrameNames(texture, {
        start: 7,
        end: 9,
        zeroPad: 1,
        prefix: texture + " ",
        suffix: ".png",
      }),
      frameRate: 3,
      repeat: -1,
    });

    scene.anims.create({
      key: "stand",
      frames: scene.anims.generateFrameNames(texture, {
        start: 8,
        end: 8,
        zeroPad: 1,
        prefix: texture + " ",
        suffix: ".png",
      }),
      frameRate: 1,
      repeat: 0,
    });
  }
}
