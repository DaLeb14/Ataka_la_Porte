(()=>{"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function n(t,r){return!r||"object"!==e(r)&&"function"!=typeof r?o(t):r}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(l,Phaser.GameObjects.Sprite);var a,s,c,u,f=(c=l,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=i(c);if(u){var r=i(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return n(this,e)});function l(e,t,r,n,i,a,s,c){var u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(u=f.call(this,e,t,r,a,0)).type=a,u.maxHp=u.hp=s,u.damage=c,u.direction=null,u.setDepth(n),e.physics.world.enable(o(u)),u}return a=l,(s=[{key:"hitBomb",value:function(e,t){t.setTint(16711680)}}])&&t(a.prototype,s),l}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(n);if(o){var r=l(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function a(e,t,r,n,o,s,c,u){var f;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(f=i.call(this,e,t,r,n,o,s,c,u)).setScale(1.2),f.creeAnimations(e,o),f.direction="down",f.play("walk-down"),f}return t=a,(r=[{key:"creeAnimations",value:function(e,t){e.anims.create({key:"walk-left",frames:e.anims.generateFrameNames(t,{start:10,end:12,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"walk-right",frames:e.anims.generateFrameNames(t,{start:4,end:6,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"walk-up",frames:e.anims.generateFrameNames(t,{start:1,end:3,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"walk-down",frames:e.anims.generateFrameNames(t,{start:7,end:9,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"stand",frames:e.anims.generateFrameNames(t,{start:8,end:8,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:1,repeat:0})}}])&&c(t.prototype,r),a}(a);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(n);if(o){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return b(this,e)});function a(e,t,r,n,o,s,c,u){var f;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(f=i.call(this,e,t,r,n,o,s,c,u)).setScale(1.3),f.creeAnimations(e,o),f.cibleMonstre=e.cibleMonstre,f.direction="up",f.play("monster-walk-up"),f}return t=a,(r=[{key:"avance",value:function(){this.direction="up",this.play("monster-walk-up"),this.body.setVelocityY(-30);var e=this;setTimeout((function(){e.corrigeTrajectoire()}),3e3)}},{key:"gauche",value:function(){this.direction="left",this.play("monster-walk-left"),this.body.setVelocityX(-30)}},{key:"recul",value:function(){this.direction="down",this.play("monster-walk-down"),this.body.setVelocityY(30)}},{key:"droite",value:function(){this.direction="right",this.play("monster-walk-right"),this.body.setVelocityX(30)}},{key:"eviteObstacle",value:function(){this.recul(),this.corrigeTrajectoire()}},{key:"corrigeTrajectoire",value:function(){var e=Math.floor(Math.random()*Math.floor(2e3)),t=this.cibleMonstre[0];this.x>t?this.gauche():this.droite(),this.x<t+30&&this.x>t-30&&this.body.setVelocityX(0);var r=this;setTimeout((function(){r.avance()}),e)}},{key:"creeAnimations",value:function(e,t){e.anims.create({key:"monster-walk-left",frames:e.anims.generateFrameNames(t,{start:10,end:12,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"monster-walk-right",frames:e.anims.generateFrameNames(t,{start:4,end:6,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"monster-walk-up",frames:e.anims.generateFrameNames(t,{start:1,end:3,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"monster-walk-down",frames:e.anims.generateFrameNames(t,{start:7,end:9,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"monster-stand",frames:e.anims.generateFrameNames(t,{start:8,end:8,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:1,repeat:0})}}])&&h(t.prototype,r),a}(a);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,Phaser.GameObjects.Sprite);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(n);if(o){var r=_(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return S(this,e)});function a(e,t,r,n,o,s){var c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(c=i.call(this,e,t,r,s,0)).setScale(1),c.setDepth(n),c.creeAnimations(e,o),c.etat="actif",c.play("actif"),c}return t=a,(r=[{key:"creeAnimations",value:function(e,t){e.anims.create({key:"actif",frames:e.anims.generateFrameNames(t,{start:1,end:6,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:6,repeat:-1}),e.anims.create({key:"stand",frames:e.anims.generateFrameNames(t,{start:1,end:1,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:1,repeat:0})}}])&&w(t.prototype,r),a}();function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(a,Phaser.GameObjects.Sprite);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(n);if(o){var r=D(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return R(this,e)});function a(e,t,r,n,o,s){var c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(c=i.call(this,e,t,r,s,0)).setScale(1),c.setDepth(n),c.creeAnimations(e,o),e.physics.world.enable(E(c)),c.body.setBounceX(1),c.body.setVelocity(Phaser.Math.Between(-2,2),10),c.etat="explose",c.play("explose"),c}return t=a,(r=[{key:"creeAnimations",value:function(e,t){e.anims.create({key:"explose",frames:e.anims.generateFrameNames(t,{start:1,end:25,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:6,repeat:0})}}])&&P(t.prototype,r),a}();function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function V(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(a,Phaser.Scene);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(n);if(o){var r=L(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return F(this,e)});function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,{key:"gameScene"})).sorciere,e.mapLayers=new Map,e.monstres,e.pentagrammes=new Map,e.cibleMonstre,e.spaceVerrou=!1,e}return t=a,(r=[{key:"init",value:function(){}},{key:"preload",value:function(){this.load.image("tiles","../assets/tilemaps/images/atakala.png"),this.load.tilemapTiledJSON("map","../assets/tilemaps/atakala_map.json"),this.load.atlas("hero","../assets/sprites/images/hero-sheet.png","../assets/sprites/hero.json"),this.load.atlas("monster","../assets/sprites/images/monster-sheet.png","../assets/sprites/monster.json"),this.load.atlas("pentagramme","../assets/sprites/images/pentagramme.png","../assets/sprites/pentagramme.json"),this.load.atlas("bomb","../assets/sprites/images/bomb-sheet.png","../assets/sprites/bomb.json")}},{key:"create",value:function(){this.cameras.main.setBounds(32,32,1600,1600),this.physics.world.setBounds(0,0,1600,1600);var e=this.make.tilemap({key:"map"}),t=e.addTilesetImage("atakala","tiles"),r=e.createDynamicLayer("decor",t,32,32),n=e.createDynamicLayer("mur",t,32,32),o=e.createStaticLayer("chemins",t,32,32),i=e.createStaticLayer("pnj",t,32,32),a=e.createDynamicLayer("mur_invisible_sans_porte",t,32,32),s=e.createStaticLayer("porte_invisible",t,32,32);this.sorciere=new p(this,800,600,100,"hero","sorciere",32,32),this.add.existing(this.sorciere,0),this.physics.add.collider(this.sorciere,n),this.physics.add.collider(this.sorciere,a),this.physics.add.collider(this.sorciere,s),n.setCollisionByExclusion([-1]),a.setCollisionByExclusion([-1]),s.setCollisionByExclusion([-1]),n.setDepth(100),i.setDepth(101),this.mapLayers.set("decor",r),this.mapLayers.set("chemins",o),this.mapLayers.set("pnj",i),this.mapLayers.set("mur_invisible_sans_porte",a),this.mapLayers.set("porte_invisible",s),this.mapLayers.set("mur",n),this.cameras.main.roundPixels=!0,this.cursors=this.input.keyboard.createCursorKeys(),this.cameras.main.startFollow(this.sorciere,!0,.08,.08),this.cibleMonstre=[835,403],this.monstres=this.add.group(),this.genereEnnemis()}},{key:"hitBomb",value:function(e,t){t.hitBomb(e,t)}},{key:"update",value:function(){if(this.sorciere.body.setVelocityX(0),this.sorciere.body.setVelocityY(0),this.input.keyboard.addKey("SPACE").isUp&&(this.spaceVerrou=!1),this.input.keyboard.addKey("SPACE").isDown&&!this.spaceVerrou){var e=new T(this,this.sorciere.x,this.sorciere.y,5,"bomb","bombe",32,32);this.add.existing(e,1),this.spaceVerrou=!0,this.monstres,this.physics.add.overlap(e,this.monstres,this.hitBomb,null,this)}this.cursors.left.isDown&&this.sorciere.x>32?(this.sorciere.direction="left",this.sorciere.play("walk-left"),this.sorciere.body.setVelocityX(-300)):this.cursors.right.isDown&&this.sorciere.x<1600&&(this.sorciere.direction="right",this.sorciere.play("walk-right"),this.sorciere.body.setVelocityX(300)),this.cursors.up.isDown&&this.sorciere.y>0?(this.sorciere.direction="up",this.sorciere.play("walk-up"),this.sorciere.body.setVelocityY(-300)):this.cursors.down.isDown&&this.sorciere.y<1600&&(this.sorciere.direction="down",this.sorciere.play("walk-down"),this.sorciere.body.setVelocityY(300)),this.cursors.up.isUp&&this.cursors.down.isUp&&this.cursors.right.isUp&&this.cursors.left.isUp&&(this.sorciere.anims.stop(),this.sorciere.body.setVelocityX(0),this.sorciere.body.setVelocityY(0))}},{key:"end",value:function(){}},{key:"genereEnnemis",value:function(){for(var e=[400,400,800,1200,1200],t=[800,1200,1400,1200,800],r=0;r<5;r++){var n="pentagramme"+r,o=new k(this,e[r],t[r],5,"pentagramme",n,32,32);this.add.existing(o,1),this.pentagrammes.set(n,o)}this.genereMonstres(0,2,5e3)}},{key:"genereMonstres",value:function(e,t,r){var n,o=this,i=0,a=0,s=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}(this.pentagrammes.values());try{for(s.s();!(n=s.n()).done;){var c=n.value;a=Math.floor(Math.random()*Math.floor(4e3)),setTimeout((function(t){var r="monstre"+i+e,n=new g(o,t.x,t.y,50,"monster",r,32,32),a=o.mapLayers.get("mur_invisible_sans_porte");o.monstres.add(n),o.physics.add.collider(n,a,(function(){n.eviteObstacle()}),null,null),o.physics.add.collider(n,o.sorciere,(function(){n.eviteObstacle()}),null,null),o.add.existing(n,0),n.avance()}),a,c),i++}}catch(e){s.e(e)}finally{s.f()}++e<t&&setTimeout((function(){o.genereMonstres(e,t,r)}),r+a)}}])&&V(t.prototype,r),a}();function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e,t){return!t||"object"!==z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(a,Phaser.Scene);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(n);if(o){var r=Y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return U(this,e)});function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,{key:"titleScene"})}return t=a,(r=[{key:"preload",value:function(){this.load.image("background","../assets/images/background.png")}},{key:"create",value:function(){var e=this;this.add.sprite(0,0,"background").setOrigin(0,0);var t=this.add.text(100,100,"Welcome to my game!");t.setInteractive({useHandCursor:!0}),t.on("pointerdown",(function(){return e.clickButton()}))}},{key:"clickButton",value:function(){this.scene.switch("gameScene")}}])&&B(t.prototype,r),a}();function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e,t){return!t||"object"!==G(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(o,Phaser.Game);var t,r,n=(t=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=J(t);if(r){var o=J(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return H(this,e)});function o(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var t={type:Phaser.AUTO,parent:"phaser-example",width:1e3,height:800,pixelArt:!0,physics:{default:"arcade"},scene:{}};return(e=n.call(this,t)).scene.add("titleScene",new I),e.scene.add("game",new N),e.scene.start("titleScene"),e}return o}();window.onload=function(){new W}})();