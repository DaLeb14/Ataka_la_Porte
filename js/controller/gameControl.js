"use strict";

export class GameControl {
  constructor() {}

  update() {
    sorciere.body.setVelocityX(0);
    sorciere.body.setVelocityY(0);

    if (cursors.left.isDown && sorciere.x > 32) {
      sorciere.direction = "left";
      sorciere.play("walk-left");
      sorciere.body.setVelocityX(-300);
    } else if (cursors.right.isDown && sorciere.x < 1600) {
      sorciere.direction = "right";
      sorciere.play("walk-right");
      sorciere.body.setVelocityX(300);
    }

    if (cursors.up.isDown && sorciere.y > 0) {
      sorciere.direction = "up";
      sorciere.play("walk-up");
      sorciere.body.setVelocityY(-300);
    } else if (cursors.down.isDown && sorciere.y < 1600) {
      sorciere.direction = "down";
      sorciere.play("walk-down");
      sorciere.body.setVelocityY(300);
    }

    if (
      cursors.up.isUp &&
      cursors.down.isUp &&
      cursors.right.isUp &&
      cursors.left.isUp
    ) {
      sorciere.anims.stop();
      sorciere.body.setVelocityX(0);
      sorciere.body.setVelocityY(0);
    }
  }
}
