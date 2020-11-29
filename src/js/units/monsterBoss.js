"use strict";
import { Monster } from "../units/monster";

export class MonsterBoss extends Monster {
  constructor(scene, x, y, z, cible, texture, type, id, ptsVie, vitesse) {
    super(scene, x, y, z, cible, texture, type, id, ptsVie, vitesse);
  }

  avance() {
    if (this.etat == "actif") {
      this.directionY = "up";
      this.play("monster-walk-up");
      this.body.setVelocityY(-this.vitesse);
    }
  }

  corrigeTrajectoire() {
    if (this.etat != "actif") {
      return;
    }

    let corrige = Math.floor(Math.random() * Math.floor(3000));
    let cibleX = this.scene.sorciere.x;
    let cibleY = this.scene.sorciere.y;

    if (this.x > cibleX) {
      this.gauche();
    } else {
      this.droite();
    }

    if (this.y > cibleY) {
      this.avance();
    } else {
      this.recule();
    }

    if (this.y < cibleY + 10 && this.y > cibleY - 10) {
      this.body.setVelocityY(0);
    }

    if (this.x < cibleX + 10 && this.x > cibleX - 10) {
      this.body.setVelocityX(0);
    }

    let esquiveAuHasard = Math.floor(Math.random() * Math.floor(10));
    if (esquiveAuHasard > 6) {
      switch (esquiveAuHasard) {
        case 7:
          this.recule();
          break;
        case 8:
          this.avance();
          break;
        case 9:
          this.gauche();
          break;
        case 10:
          this.droite();
          break;
        default:
          this.avance();
      }
    }
    var meAndMylself = this;
    setTimeout(() => {
      meAndMylself.corrigeTrajectoire();
    }, corrige);
  }
}
