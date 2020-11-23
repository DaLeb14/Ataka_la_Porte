"use strict";

export class Unit extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, z, texture, type, ptsVie, damage) {
    super(scene, x, y, type, 0);
    //Phaser.GameObjects.Sprite.call(this, scene, x, y, texture, theFrame)
    this.type = type;
    this.ptsVie = ptsVie;
    this.damage = damage; // default damage
    this.direction = null;
    this.etat = "actif";
    this.directionX = null;
    this.directionY = null;
    this.setDepth(z);

    scene.physics.world.enable(this);
  }
}
