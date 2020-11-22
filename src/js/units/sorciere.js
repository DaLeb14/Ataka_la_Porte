"use strict";
import { Unit } from "./unit";

export class Sorciere extends Unit {
  constructor(scene, x, y, z, texture, type, ptsVie, damage) {
    super(scene, x, y, z, texture, type, ptsVie, damage);

    //Agrandissement
    this.setScale(1.2);
    this.creeAnimations(scene, texture);
    this.mana = 10;
    this.direction = "down";
    this.play("walk-down");
  }

  perdPointsDeVie(nb) {
    let saveTint = this.tint;
    let saveVeloX = this.body.velocity.x;
    let saveVeloY = this.body.velocity.y;
    this.tint = 0xff0000;
    this.ptsVie = this.ptsVie - nb;
    this.scene.majPtsVieEcran();
    this.resteImmobile("inactif", -saveVeloX / 4, -saveVeloY / 4);

    setTimeout(() => {
      this.resteImmobile("actif", 0, 0);
      this.tint = saveTint;
    }, 2500);
  }

  perdPointsDeMana(nb) {
    this.mana--;
    this.scene.majPtsManaEcran();

    setTimeout(() => {
      this.mana++;
      this.scene.majPtsManaEcran();
    }, 10000);
  }

  resteImmobile(etat, vlX, vlY) {
    this.etat = etat;
    this.anims.stop();
    this.body.setVelocityX(vlX);
    this.body.setVelocityY(vlY);
  }

  avance() {
    this.direction = "up";
    this.play("walk-up");
    this.body.setVelocityY(-300);
  }

  gauche() {
    this.direction = "left";
    this.play("walk-left");
    this.body.setVelocityX(-300);
  }

  droite() {
    this.direction = "right";
    this.play("walk-right");
    this.body.setVelocityX(300);
  }

  recule() {
    this.direction = "down";
    this.play("walk-down");
    this.body.setVelocityY(300);
  }

  creeAnimations(scene, texture) {
    scene.anims.create({
      key: "walk-left",
      frames: scene.anims.generateFrameNames(texture, {
        start: 9,
        end: 11,
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
        start: 3,
        end: 5,
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
        start: 0,
        end: 2,
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
        start: 6,
        end: 8,
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
