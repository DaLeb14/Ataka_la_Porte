"use strict";

export class Unit extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, z, texture, type, hp, damage) {
    super(scene, x, y, type, 0);
    //Phaser.GameObjects.Sprite.call(this, scene, x, y, texture, theFrame)
    this.type = type;
    this.maxHp = this.hp = hp;
    this.damage = damage; // default damage
    this.direction = null;

    this.setDepth(z);
  }
}
