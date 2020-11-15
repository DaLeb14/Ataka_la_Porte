"use strict";
import { Unit } from "./unit";

export class Monster extends Unit {
  constructor(scene, x, y, z, texture, type, hp, damage) {
    super(scene, x, y, z, texture, type, hp, damage);

    //Agrandissement
    this.setScale(1.3);

    this.creeAnimations(scene, texture);
    this.cibleMonstre = scene.cibleMonstre;

    this.direction = "up";
    this.play("monster-walk-up");
  }

  avance() {
    this.direction = "up";
    this.play("monster-walk-up");
    this.body.setVelocityY(-30);

    var meAndMylself = this;
    setTimeout(() => {
      meAndMylself.corrigeTrajectoire();
    }, 3000);
  }

  gauche() {
    this.direction = "left";
    this.play("monster-walk-left");
    this.body.setVelocityX(-30);
  }

  recul() {
    this.direction = "down";
    this.play("monster-walk-down");
    this.body.setVelocityY(30);
  }

  droite() {
    this.direction = "right";
    this.play("monster-walk-right");
    this.body.setVelocityX(30);
  }

  eviteObstacle() {
    this.recul();
    this.corrigeTrajectoire();
  }

  corrigeTrajectoire() {
    let marcheDevant = Math.floor(Math.random() * Math.floor(2000));
    let porteX = this.cibleMonstre[0];

    if (this.x > porteX) {
      this.gauche();
    } else {
      this.droite();
    }

    if (this.x < porteX + 30 && this.x > porteX - 30) {
      this.body.setVelocityX(0);
    }

    var meAndMylself = this;
    setTimeout(() => {
      meAndMylself.avance();
    }, marcheDevant);
  }

  creeAnimations(scene, texture) {
    scene.anims.create({
      key: "monster-walk-left",
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
      key: "monster-walk-right",
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
      key: "monster-walk-up",
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
      key: "monster-walk-down",
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
      key: "monster-stand",
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
