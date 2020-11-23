"use strict";
import { Unit } from "./unit";

export class Monster extends Unit {
  constructor(scene, x, y, z, cible, texture, type, hp, damage) {
    super(scene, x, y, z, texture, type, hp, damage);

    //Agrandissement
    this.setScale(1.3);
    this.creeAnimations(scene, texture);
    this.cibleMonstre = cible;
    this.directionY = "up";
    this.play("monster-walk-up");
  }

  brule() {
    this.scene.augmenteMonstresMort();
    this.etat = "brule";
    this.anims.stop();
    this.play("monster-brule");
    this.body.setVelocityY(30);
    this.directionY = "down";

    this.on(
      "animationcomplete",
      function (animation, frame) {
        if (animation.key === "monster-brule") {
          this.dead();
        }
      },
      this
    );
  }

  avance() {
    if (this.etat == "actif") {
      this.directionY = "up";
      this.play("monster-walk-up");
      this.body.setVelocityY(-30);

      if (this.y < 0) {
        this.scene.augmenteMonstresPasses();
        this.anims.stop();
        this.dead();
        this.destroy();
      }

      var meAndMylself = this;

      setTimeout(() => {
        meAndMylself.corrigeTrajectoire();
      }, 3000);
    }

    if (this.etat == "brule") {
      this.brule();
    }
  }

  dead() {
    this.scene.physics.world.disable(this);
    this.body.setVelocityX(0);
    this.body.setVelocityY(0);
    this.directionX = null;
    this.directionY = null;
    this.etat = "death";
  }

  gauche() {
    if (this.etat == "actif") {
      this.directionX = "left";
      this.play("monster-walk-left");
      this.body.setVelocityX(-30);
    }
  }

  recule() {
    if (this.etat == "actif") {
      this.directionY = "down";
      this.play("monster-walk-down");
      this.body.setVelocityY(30);
    }
  }

  droite() {
    if (this.etat == "actif") {
      this.directionX = "right";
      this.play("monster-walk-right");
      this.body.setVelocityX(30);
    }
  }

  eviteObstacle() {
    this.recule();
    this.corrigeTrajectoire();
  }

  corrigeTrajectoire() {
    if (this.etat == "actif") {
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
  }

  creeAnimations(scene, texture) {
    scene.anims.create({
      key: "monster-walk-left",
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
      key: "monster-walk-right",
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
      key: "monster-walk-up",
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
      key: "monster-walk-down",
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
      key: "monster-stand",
      frames: scene.anims.generateFrameNames(texture, {
        start: 7,
        end: 7,
        zeroPad: 1,
        prefix: texture + " ",
        suffix: ".png",
      }),
      frameRate: 1,
      repeat: 0,
    });

    scene.anims.create({
      key: "monster-brule",
      frames: scene.anims.generateFrameNames(texture, {
        start: 12,
        end: 25,
        zeroPad: 1,
        prefix: texture + " ",
        suffix: ".png",
      }),
      frameRate: 4,
      repeat: 0,
    });
  }
}
