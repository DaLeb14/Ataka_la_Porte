"use strict";
import { Unit } from "./unit";

export class Sorciere extends Unit {
  constructor(scene, x, y, z, texture, type, ptsVie, vitesse) {
    super(scene, x, y, z, texture, type, ptsVie, vitesse);

    //Agrandissement
    this.setScale(1.2);
    this.creeAnimations(scene, texture);
    this.mana = 10;
    this.directionY = "down";
    this.play("walk-down");
  }

  ejecteDeLaPorte() {
    let saveVeloX = this.body.velocity.x;
    let saveVeloY = this.body.velocity.y;
    this.tint = 0x00bb55;
    this.resteImmobile("inactif", 0, 40);

    setTimeout(() => {
      this.resteImmobile("actif", 0, 0);
      this.clearTint();
    }, 1000);
  }

  perdPointsDeVie(nb) {
    let saveVeloX = this.body.velocity.x;
    let saveVeloY = this.body.velocity.y;
    this.tint = 0xff0000;
    this.ptsVie = this.ptsVie - nb;
    this.scene.majPtsVieEcran();

    if (this.ptsVie > 0) {
      this.resteImmobile("inactif", -saveVeloX / 4, -saveVeloY / 4);

      setTimeout(() => {
        this.resteImmobile("actif", 0, 0);
        this.clearTint();
      }, 2500);
    }
  }

  dead() {
    this.scene.physics.world.disable(this);
    this.anims.stop();
    this.etat = "inactif";
    this.body.setVelocityY(30);
    this.directionY = "down";
    this.play("sorciereIsDead");

    // this.on(
    //   "animationcomplete",
    //   function (animation, frame) {
    //     if (animation.key === "sorciereIsDead") {
    //       this.body.setVelocityX(0);
    //       this.body.setVelocityY(0);
    //       this.directionX = null;
    //       this.directionY = null;
    //       this.etat = "death";
    //     }
    //   },
    //   this
    // );
  }

  perdPointsDeMana(nb) {
    this.mana--;
    this.scene.majPtsManaEcran();

    setTimeout(() => {
      if (!this.finDuJeu && this.scene != null) {
        this.mana++;
        this.scene.majPtsManaEcran();
      }
    }, 10000);
  }

  resteImmobile(etat, vlX, vlY) {
    this.etat = etat;
    this.anims.stop();
    this.directionX = null;
    this.directionY = null;
    this.body.setVelocityX(vlX);
    this.body.setVelocityY(vlY);
  }

  bougeX(goLeft, goRight) {
    //on ne repete pas l'animation si on va deja à gauche
    if (goLeft && this.directionX != "left") {
      this.directionX = "left";
      this.play("walk-left");
      this.body.setVelocityX(-this.vitesse);
    }

    //on ne repete pas l'animation si on va deja à droite
    if (goRight && this.directionX != "right") {
      this.directionX = "right";
      this.play("walk-right");
      this.body.setVelocityX(this.vitesse);
    }

    // on arrete d'aller à gauche ou à droite et on reprend l'animation en Y si elle existe
    // on reprend l'animation en Y une seule fois au moment où on relache la touche des X
    //on stoppe le personnage si on dépasse du cadre
    if (
      (!goLeft && !goRight && this.directionX != null) ||
      (goLeft && this.x < 32) ||
      (goRight && this.x > 1600)
    ) {
      this.body.setVelocityX(0);
      this.directionX = null;
      if (this.directionY == "up") {
        this.play("walk-up");
      }
      if (this.directionY == "down") {
        this.play("walk-down");
      }
    }
  }

  bougeY(goUp, goDown) {
    //on ne repete pas l'animation si on va deja en haut
    if (goUp && this.directionY != "up") {
      this.directionY = "up";
      this.play("walk-up");
      this.body.setVelocityY(-this.vitesse);
    }

    //on ne repete pas l'animation si on va deja en bas
    if (goDown && this.directionY != "down") {
      this.directionY = "down";
      this.play("walk-down");
      this.body.setVelocityY(this.vitesse);
    }

    // on arrete d'aller en haut ou en bas et on reprend l'animation en X si elle existe
    // on reprend l'animation en X une seule fois au moment où on relache la touche des Y
    //on stoppe le personnage si on dépasse du cadre
    if (
      (!goUp && !goDown && this.directionY != null) ||
      (goDown && this.y > 1600)
    ) {
      this.directionY = null;
      this.body.setVelocityY(0);

      if (this.directionX == "left") {
        this.play("walk-left");
      }
      if (this.directionX == "right") {
        this.play("walk-right");
      }
    }
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
      frameRate: 5,
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
      frameRate: 5,
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
      frameRate: 5,
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
      frameRate: 5,
      repeat: -1,
    });

    scene.anims.create({
      key: "sorciereIsDead",
      frames: scene.anims.generateFrameNames(texture, {
        start: 11,
        end: 11,
        zeroPad: 1,
        prefix: texture + " ",
        suffix: ".png",
      }),
      frameRate: 5,
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
