(()=>{"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,r){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,r)}function r(t,r){return!r||"object"!==e(r)&&"function"!=typeof r?n(t):r}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var i=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&t(e,r)}(c,Phaser.GameObjects.Sprite);var i,s,a=(i=c,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=o(i);if(s){var n=o(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return r(this,e)});function c(e,t,r,o,i,s,u,f){var l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(l=a.call(this,e,t,r,s,0)).type=s,l.ptsVie=u,l.damage=f,l.direction=null,l.etat="actif",l.setDepth(o),e.physics.world.enable(n(l)),l}return c}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(s,e);var t,r,n,o,i=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(n);if(o){var r=f(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return u(this,e)});function s(e,t,r,n,o,a,c,u){var f;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(f=i.call(this,e,t,r,n,o,a,c,u)).setScale(1.2),f.creeAnimations(e,o),f.mana=10,f.direction="down",f.play("walk-down"),f}return t=s,(r=[{key:"perdPointsDeVie",value:function(e){var t=this,r=this.tint,n=this.body.velocity.x,o=this.body.velocity.y;this.tint=16711680,this.ptsVie=this.ptsVie-e,this.scene.majPtsVieEcran(),this.resteImmobile("inactif",-n/4,-o/4),setTimeout((function(){t.resteImmobile("actif",0,0),t.tint=r}),2500)}},{key:"perdPointsDeMana",value:function(e){var t=this;this.mana--,this.scene.majPtsManaEcran(),setTimeout((function(){t.mana++,t.scene.majPtsManaEcran()}),1e4)}},{key:"resteImmobile",value:function(e,t,r){this.etat=e,this.anims.stop(),this.body.setVelocityX(t),this.body.setVelocityY(r)}},{key:"avance",value:function(){this.direction="up",this.play("walk-up"),this.body.setVelocityY(-300)}},{key:"gauche",value:function(){this.direction="left",this.play("walk-left"),this.body.setVelocityX(-300)}},{key:"droite",value:function(){this.direction="right",this.play("walk-right"),this.body.setVelocityX(300)}},{key:"recule",value:function(){this.direction="down",this.play("walk-down"),this.body.setVelocityY(300)}},{key:"creeAnimations",value:function(e,t){e.anims.create({key:"walk-left",frames:e.anims.generateFrameNames(t,{start:9,end:11,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"walk-right",frames:e.anims.generateFrameNames(t,{start:3,end:5,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"walk-up",frames:e.anims.generateFrameNames(t,{start:0,end:2,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"walk-down",frames:e.anims.generateFrameNames(t,{start:6,end:8,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"stand",frames:e.anims.generateFrameNames(t,{start:8,end:8,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:1,repeat:0})}}])&&a(t.prototype,r),s}(i);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(s,e);var t,r,n,o,i=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(n);if(o){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return m(this,e)});function s(e,t,r,n,o,a,c,u,f){var l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(l=i.call(this,e,t,r,n,a,c,u,f)).setScale(1.3),l.creeAnimations(e,a),l.cibleMonstre=o,l.direction="up",l.play("monster-walk-up"),l}return t=s,(r=[{key:"brule",value:function(){this.scene.augmenteScore(10),this.etat="brule",this.anims.stop(),this.play("monster-brule"),this.body.setVelocityY(30),this.direction="down",this.on("animationcomplete",(function(e,t){"monster-brule"===e.key&&this.dead()}),this)}},{key:"avance",value:function(){if("actif"==this.etat){this.direction="up",this.play("monster-walk-up"),this.body.setVelocityY(-30),this.y<0&&this.scene.augmenteMonstresPasses();var e=this;setTimeout((function(){e.corrigeTrajectoire()}),3e3)}"brule"==this.etat&&this.brule()}},{key:"dead",value:function(){this.scene.physics.world.disable(this),this.body.setVelocityX(0),this.body.setVelocityY(0),this.direction="death",this.scene.checkFinDeNiveau()}},{key:"gauche",value:function(){this.direction="left",this.play("monster-walk-left"),this.body.setVelocityX(-30)}},{key:"recule",value:function(){this.direction="down",this.play("monster-walk-down"),this.body.setVelocityY(30)}},{key:"droite",value:function(){this.direction="right",this.play("monster-walk-right"),this.body.setVelocityX(30)}},{key:"eviteObstacle",value:function(){"actif"==this.etat&&(this.recule(),this.corrigeTrajectoire())}},{key:"corrigeTrajectoire",value:function(){var e=Math.floor(Math.random()*Math.floor(2e3)),t=this.cibleMonstre[0];this.x>t?this.gauche():this.droite(),this.x<t+30&&this.x>t-30&&this.body.setVelocityX(0);var r=this;setTimeout((function(){r.avance()}),e)}},{key:"creeAnimations",value:function(e,t){e.anims.create({key:"monster-walk-left",frames:e.anims.generateFrameNames(t,{start:9,end:11,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"monster-walk-right",frames:e.anims.generateFrameNames(t,{start:3,end:5,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"monster-walk-up",frames:e.anims.generateFrameNames(t,{start:0,end:2,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"monster-walk-down",frames:e.anims.generateFrameNames(t,{start:6,end:8,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"monster-stand",frames:e.anims.generateFrameNames(t,{start:7,end:7,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:1,repeat:0}),e.anims.create({key:"monster-brule",frames:e.anims.generateFrameNames(t,{start:12,end:25,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:4,repeat:0})}}])&&y(t.prototype,r),s}(i);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(s,Phaser.GameObjects.Sprite);var t,r,n,o,i=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(n);if(o){var r=S(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return k(this,e)});function s(e,t,r,n,o,a){var c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(c=i.call(this,e,t,r,a,0)).setScale(1),c.setDepth(n),c.creeAnimations(e,o),c.etat="actif",c.play("actif"),c}return t=s,(r=[{key:"creeAnimations",value:function(e,t){e.anims.create({key:"actif",frames:e.anims.generateFrameNames(t,{start:0,end:5,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:6,repeat:-1}),e.anims.create({key:"stand",frames:e.anims.generateFrameNames(t,{start:0,end:0,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:1,repeat:0})}}])&&g(t.prototype,r),s}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?D(e):t}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(s,Phaser.GameObjects.Sprite);var t,r,n,o,i=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(n);if(o){var r=T(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return R(this,e)});function s(e,t,r,n,o,a){var c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(c=i.call(this,e,t,r,a,0)).setScale(1),c.setDepth(n),c.dureeDeVie=1e4,c.creeAnimations(e,o),c.scene.physics.world.enable(D(c)),c.etat="pose",c.play("pose"),setTimeout((function(){c.explose()}),c.dureeDeVie),c}return t=s,(r=[{key:"explose",value:function(){"pose"==this.etat&&(this.etat="end",this.play("end"),this.scene.physics.world.disable(this))}},{key:"creeAnimations",value:function(e,t){var r,n;e.anims.create((x(r={key:"pose",frames:e.anims.generateFrameNames(t,{start:0,end:9,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:4,repeat:0,repeatDelay:0,yoyo:!1,skipMissedFrames:!0,defaultTextureKey:null,delay:0},"frameRate",null),x(r,"duration",null),x(r,"timeScale",1),x(r,"showOnStart",!1),x(r,"hideOnComplete",!1),r)),e.anims.create((x(n={key:"end",frames:e.anims.generateFrameNames(t,{start:9,end:15,zeroPad:0,prefix:t+" ",suffix:".png"}),frameRate:.5,repeat:1,repeatDelay:0,yoyo:!1,skipMissedFrames:!0,defaultTextureKey:null,delay:0},"frameRate",null),x(n,"duration",null),x(n,"timeScale",1),x(n,"showOnStart",!1),x(n,"hideOnComplete",!0),n))}}])&&j(t.prototype,r),s}();function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function V(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(s,Phaser.Scene);var t,r,n,o,i=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(n);if(o){var r=z(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return N(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,{key:"gameScene"})).sorciere,t.mapLayers=new Map,t.monstres,t.pentagrammes=new Map,t.spaceVerrou=!1,t.score=0,t.textScore,t.nbMonstresPasse=0,t.textMonstresPasse,t.niveau,t.textNiveau,t}return t=s,(r=[{key:"init",value:function(){}},{key:"preload",value:function(){this.load.image("tiles","./src/assets/tilemaps/images/atakala.png"),this.load.tilemapTiledJSON("map","./src/assets/tilemaps/atakala_map.json"),this.load.atlas("hero","./src/assets/sprites/images/hero-sheet.png","./src/assets/sprites/hero.json"),this.load.atlas("monster-sheet","./src/assets/sprites/images/monster-sheet2.png","./src/assets/sprites/monster.json"),this.load.atlas("pentagramme","./src/assets/sprites/images/pentagramme.png","./src/assets/sprites/pentagramme.json"),this.load.atlas("bomb-sheet","./src/assets/sprites/images/bomb-sheet.png","./src/assets/sprites/bomb.json"),this.load.image("coeur","./src/assets/images/heart.png"),this.load.image("mana","./src/assets/images/mana.png")}},{key:"create",value:function(){this.cameras.main.setBounds(32,32,1600,1600),this.physics.world.setBounds(0,0,1600,1600);var e=this.make.tilemap({key:"map"}),t=e.addTilesetImage("atakala","tiles"),r=e.createDynamicLayer("decor",t,32,32),n=e.createDynamicLayer("mur",t,32,32),o=e.createStaticLayer("chemins",t,32,32),i=e.createStaticLayer("pnj",t,32,32),s=e.createDynamicLayer("mur_invisible_sans_porte",t,32,32),a=e.createStaticLayer("porte_invisible",t,32,32);this.sorciere=new l(this,800,600,100,"hero","sorciere",10,32),this.imageGroupCoeur=this.add.group(),this.majPtsVieEcran(),this.imageGroupMana=this.add.group(),this.majPtsManaEcran(),this.add.existing(this.sorciere,0),this.physics.add.collider(this.sorciere,n),this.physics.add.collider(this.sorciere,s),this.physics.add.collider(this.sorciere,a),n.setCollisionByExclusion([-1]),s.setCollisionByExclusion([-1]),a.setCollisionByExclusion([-1]),n.setDepth(100),i.setDepth(101),this.mapLayers.set("decor",r),this.mapLayers.set("chemins",o),this.mapLayers.set("pnj",i),this.mapLayers.set("mur_invisible_sans_porte",s),this.mapLayers.set("porte_invisible",a),this.mapLayers.set("mur",n),this.cameras.main.roundPixels=!0,this.cursors=this.input.keyboard.createCursorKeys(),this.cameras.main.startFollow(this.sorciere,!0,.08,.08),this.coordonneesPorte=[835,403],this.textScore=this.add.text(780,5,"Score : "+this.score,{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:"20px",color:"white"}),this.textScore.setScrollFactor(0).setDepth(1e3),this.textMonstresPasse=this.add.text(780,30,"Monstres passés : "+this.nbMonstresPasse+"/10",{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:"20px",color:"white"}),this.textMonstresPasse.setScrollFactor(0).setDepth(1e3),this.monstres=this.add.group(),this.genereEnnemis()}},{key:"hitMine",value:function(e,t){setTimeout((function(){t.brule()}),1e3),e.explose()}},{key:"augmenteScore",value:function(e){this.score=this.score+e,this.textScore.setText("Score : "+this.score)}},{key:"augmenteMonstresPasses",value:function(){this.nbMonstresPasse=this.nbMonstresPasse+1,this.textMonstresPasse.setText("Monstres passés : "+this.nbMonstresPasse+"/10"),checkFinDeNiveau()}},{key:"checkFinDeNiveau",value:function(){this.add.text(500,500,"The end !",{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:"40px",color:"white"}).setScrollFactor(0).setDepth(1e3)}},{key:"majPtsVieEcran",value:function(){this.imageGroupCoeur.clear(!0);for(var e=0;e<this.sorciere.ptsVie;e++){var t=this.add.image(30+10*e,760,"coeur").setScrollFactor(0).setDepth(1e3);this.imageGroupCoeur.add(t)}this.scene.checkFinDeNiveau()}},{key:"majPtsManaEcran",value:function(){this.imageGroupMana.clear(!0);for(var e=0;e<this.sorciere.mana;e++){var t=this.add.image(870+10*e,760,"mana").setScrollFactor(0).setDepth(1e3);this.imageGroupMana.add(t)}}},{key:"update",value:function(){if(this.input.keyboard.addKey("SPACE").isUp&&(this.spaceVerrou=!1),this.input.keyboard.addKey("SPACE").isDown&&"actif"==this.sorciere.etat&&this.sorciere.mana>0&&!this.spaceVerrou){var e=new E(this,this.sorciere.x,this.sorciere.y,5,"bomb-sheet","bombe");this.add.existing(e,1),this.sorciere.perdPointsDeMana(1),this.spaceVerrou=!0,this.physics.add.overlap(e,this.monstres,this.hitMine,null,null)}"actif"==this.sorciere.etat&&(this.cursors.left.isDown&&this.sorciere.x>32?this.sorciere.gauche():this.cursors.right.isDown&&this.sorciere.x<1600&&this.sorciere.droite(),this.cursors.up.isDown&&this.sorciere.y>0?this.sorciere.avance():this.cursors.down.isDown&&this.sorciere.y<1600&&this.sorciere.recule(),this.cursors.up.isUp&&this.cursors.down.isUp&&this.cursors.right.isUp&&this.cursors.left.isUp&&this.sorciere.resteImmobile("actif",0,0))}},{key:"end",value:function(){}},{key:"genereEnnemis",value:function(){for(var e=[400,400,800,1200,1200],t=[800,1200,1400,1200,800],r=0;r<5;r++){var n="pentagramme"+r,o=new P(this,e[r],t[r],5,"pentagramme",n);this.add.existing(o,1),this.pentagrammes.set(n,o)}this.genereMonstres(0,2,5e3)}},{key:"genereMonstres",value:function(e,t,r){var n,o=this,i=0,s=0,a=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?F(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){a=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw i}}}}(this.pentagrammes.values());try{for(a.s();!(n=a.n()).done;){var c=n.value;s=Math.floor(Math.random()*Math.floor(4e3)),setTimeout((function(t){var r="monstre"+i+e,n=new b(o,t.x,t.y,50,o.coordonneesPorte,"monster-sheet",r,32,32),s=o.mapLayers.get("mur_invisible_sans_porte");o.monstres.add(n),o.physics.add.collider(n,s,(function(){n.eviteObstacle()}),null,null),o.physics.add.collider(n,o.sorciere,(function(){n.eviteObstacle(),"actif"==n.etat&&o.sorciere.perdPointsDeVie(1)}),null,null),o.add.existing(n,0),n.avance()}),s,c),i++}}catch(e){a.e(e)}finally{a.f()}++e<t&&setTimeout((function(){o.genereMonstres(e,t,r)}),r+s)}}])&&V(t.prototype,r),s}();function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){return!t||"object"!==G(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(s,Phaser.Scene);var t,r,n,o,i=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(n);if(o){var r=U(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return I(this,e)});function s(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),i.call(this,{key:"titleScene"})}return t=s,(r=[{key:"preload",value:function(){this.load.image("background","./src/assets/images/background.png")}},{key:"create",value:function(){var e=this;this.add.sprite(0,0,"background").setOrigin(0,0);var t=this.add.text(300,300,"Welcome to my game !!!",{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:"35px",backgroundColor:"grey",color:"white"});t.setInteractive({useHandCursor:!0}),t.on("pointerdown",(function(){return e.clickButton()}))}},{key:"clickButton",value:function(){this.scene.switch("gameScene")}}])&&L(t.prototype,r),s}();function Y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var K=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.num=t}var t,r;return t=e,(r=[{key:"getNiveauSuperieur",value:function(){this.num++}}])&&Y(t.prototype,r),e}();function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(o,Phaser.Game);var t,r,n=(t=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=$(t);if(r){var o=$(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return W(this,e)});function o(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var t={type:Phaser.AUTO,parent:"phaser-example",width:1e3,height:800,pixelArt:!0,physics:{default:"arcade"},scene:{}};e=n.call(this,t);var r=new K(0);return e.scene.add("titleScene",new X),e.scene.add("game",new A(r)),e.scene.start("titleScene"),e}return o}();window.onload=function(){new q}})();