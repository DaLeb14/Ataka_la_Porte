"use strict";

import { Unit } from "./unit";

export class Monster extends Unit {
  constructor(scene, x, y, z, cible, texture, type, id, ptsVie, vitesse) {
    super(scene, x, y, z, texture, type, ptsVie, vitesse);

    //Agrandissement
    this.setScale(1.3);
    this.creeAnimations(scene, texture);
    this.cibleMonstre = cible;
    this.directionY = "up";
    this.play("monster-walk-up");
  }

  perdPtDeVie() {
    this.ptsVie--;
    if (this.ptsVie < 1) {
      this.brule();
    }
  }

  brule() {
    if (this.etat == "brule") {
      return;
    }
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
    if (this.etat != "actif") {
      return;
    }
    this.directionY = "up";
    this.play("monster-walk-up");
    this.body.setVelocityY(-this.vitesse);

    if (this.y < 0) {
      this.etat == "inactif";
      this.scene.augmenteMonstresPasses();
      this.anims.stop();
      this.dead();
      this.destroy();
      return;
    }

    var meAndMylself = this;

    setTimeout(() => {
      meAndMylself.corrigeTrajectoire();
    }, 2000);
  }

  dead() {
    this.scene.physics.world.disable(this);
    this.body.setVelocityX(0);
    this.body.setVelocityY(0);
    this.directionX = null;
    this.directionY = null;
    this.etat = "death";
    //this.setActive(false).setVisible(false);

    if (this.type == "boss") {
      this.destroy();
    }
  }

  gauche() {
    if (this.etat == "actif") {
      this.directionX = "left";
      this.play("monster-walk-left");
      this.body.setVelocityX(-this.vitesse);
    }
  }

  recule() {
    if (this.etat == "actif") {
      this.directionY = "down";
      this.play("monster-walk-down");
      this.body.setVelocityY(this.vitesse);
    }
  }

  droite() {
    if (this.etat == "actif") {
      this.directionX = "right";
      this.play("monster-walk-right");
      this.body.setVelocityX(this.vitesse);
    }
  }

  eviteObstacle() {
    this.recule();
    this.corrigeTrajectoire();
  }

  corrigeTrajectoire() {
    if (this.etat != "actif") {
      return;
    }

    let marcheDevant = Math.floor(Math.random() * Math.floor(2000));
    let cibleX = this.cibleMonstre[0];

    if (this.x > cibleX) {
      this.gauche();
    } else {
      this.droite();
    }

    if (this.x < cibleX + 30 && this.x > cibleX - 30) {
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
