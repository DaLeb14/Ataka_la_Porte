"use strict";

export class Unit extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, z, texture, type, ptsVie, vitesse) {
    super(scene, x, y, texture, 0);

    this.type = type;
    this.vitesse = vitesse;
    this.ptsVie = ptsVie;
    this.ptsVieDeDebut = ptsVie;
    this.direction = null;
    this.etat = "actif";
    this.directionX = null;
    this.directionY = null;
    this.setDepth(z);

    scene.physics.world.enable(this);
  }
}
