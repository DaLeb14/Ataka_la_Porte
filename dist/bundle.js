(()=>{"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?r(t):n}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var o=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}(c,Phaser.GameObjects.Sprite);var o,s,a=(o=c,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=i(o);if(s){var r=i(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return n(this,e)});function c(e,t,n,i,o,s,u,f){var l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(l=a.call(this,e,t,n,s,0)).type=s,l.vitesse=f,l.ptsVie=u,l.direction=null,l.etat="actif",l.directionX=null,l.directionY=null,l.setDepth(i),e.physics.world.enable(r(l)),l}return c}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(s,e);var t,n,r,i,o=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(i){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function s(e,t,n,r,i,a,c,u){var f;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(f=o.call(this,e,t,n,r,i,a,c,u)).creeAnimations(e,i),f.mana=10,f.directionY="down",f.play("walk-down"),f}return t=s,(n=[{key:"ejecteDeLaPorte",value:function(){var e=this;this.body.velocity.x,this.body.velocity.y,this.tint=47957,this.resteImmobile("inactif",0,40),setTimeout((function(){e.resteImmobile("actif",0,0),e.clearTint()}),1e3)}},{key:"perdPointsDeVie",value:function(e){var t=this,n=this.body.velocity.x,r=this.body.velocity.y;this.tint=16711680,this.ptsVie=this.ptsVie-e,this.scene.majPtsVieEcran(),this.ptsVie>0&&(this.resteImmobile("inactif",-n/4,-r/4),setTimeout((function(){t.resteImmobile("actif",0,0),t.clearTint()}),2500))}},{key:"dead",value:function(){this.scene.physics.world.disable(this),this.anims.stop(),this.etat="inactif",this.body.setVelocityY(30),this.directionY="down",this.play("sorciereIsDead")}},{key:"perdPointsDeMana",value:function(e){var t=this;this.mana--,this.scene.majPtsManaEcran(),setTimeout((function(){t.finDuJeu||null==t.scene||(t.mana++,t.scene.majPtsManaEcran())}),1e4)}},{key:"resteImmobile",value:function(e,t,n){this.etat=e,this.anims.stop(),this.directionX=null,this.directionY=null,this.body.setVelocityX(t),this.body.setVelocityY(n)}},{key:"bougeX",value:function(e,t){e&&"left"!=this.directionX&&(this.directionX="left",this.play("walk-left"),this.body.setVelocityX(-this.vitesse)),t&&"right"!=this.directionX&&(this.directionX="right",this.play("walk-right"),this.body.setVelocityX(this.vitesse)),(!e&&!t&&null!=this.directionX||e&&this.x<32||t&&this.x>1600)&&(this.body.setVelocityX(0),this.directionX=null,"up"==this.directionY&&this.play("walk-up"),"down"==this.directionY&&this.play("walk-down"))}},{key:"bougeY",value:function(e,t){e&&"up"!=this.directionY&&(this.directionY="up",this.play("walk-up"),this.body.setVelocityY(-this.vitesse)),t&&"down"!=this.directionY&&(this.directionY="down",this.play("walk-down"),this.body.setVelocityY(this.vitesse)),(!e&&!t&&null!=this.directionY||t&&this.y>1600)&&(this.directionY=null,this.body.setVelocityY(0),"left"==this.directionX&&this.play("walk-left"),"right"==this.directionX&&this.play("walk-right"))}},{key:"creeAnimations",value:function(e,t){e.anims.create({key:"walk-left",frames:e.anims.generateFrameNames(t,{start:9,end:11,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:5,repeat:-1}),e.anims.create({key:"walk-right",frames:e.anims.generateFrameNames(t,{start:3,end:5,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:5,repeat:-1}),e.anims.create({key:"walk-up",frames:e.anims.generateFrameNames(t,{start:0,end:2,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:5,repeat:-1}),e.anims.create({key:"walk-down",frames:e.anims.generateFrameNames(t,{start:6,end:8,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:5,repeat:-1}),e.anims.create({key:"sorciereIsDead",frames:e.anims.generateFrameNames(t,{start:12,end:12,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:5,repeat:-1}),e.anims.create({key:"stand",frames:e.anims.generateFrameNames(t,{start:8,end:8,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:1,repeat:0})}}])&&a(t.prototype,n),s}(o);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(s,e);var t,n,r,i,o=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(i){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function s(e,t,n,r,i,a,c,u,f,l){var h;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(h=o.call(this,e,t,n,r,a,c,f,l)).setScale(1.3),h.creeAnimations(e,a),h.cibleMonstre=i,h.directionY="up",h.play("monster-walk-up"),h}return t=s,(n=[{key:"perdPtDeVie",value:function(){this.ptsVie--,this.ptsVie<1&&this.brule()}},{key:"brule",value:function(){"brule"!=this.etat&&(this.scene.augmenteMonstresMort(),this.etat="brule",this.anims.stop(),this.play("monster-brule"),this.body.setVelocityY(30),this.directionY="down",this.on("animationcomplete",(function(e,t){"monster-brule"===e.key&&this.dead()}),this))}},{key:"avance",value:function(){if("actif"==this.etat){if(this.directionY="up",this.play("monster-walk-up"),this.body.setVelocityY(-this.vitesse),this.y<0)return this.etat,this.scene.augmenteMonstresPasses(),this.anims.stop(),this.dead(),void this.destroy();var e=this;setTimeout((function(){e.corrigeTrajectoire()}),2e3)}}},{key:"dead",value:function(){this.scene.physics.world.disable(this),this.body.setVelocityX(0),this.body.setVelocityY(0),this.directionX=null,this.directionY=null,this.etat="death","boss"==this.type&&this.destroy()}},{key:"gauche",value:function(){"actif"==this.etat&&(this.directionX="left",this.play("monster-walk-left"),this.body.setVelocityX(-this.vitesse))}},{key:"recule",value:function(){"actif"==this.etat&&(this.directionY="down",this.play("monster-walk-down"),this.body.setVelocityY(this.vitesse))}},{key:"droite",value:function(){"actif"==this.etat&&(this.directionX="right",this.play("monster-walk-right"),this.body.setVelocityX(this.vitesse))}},{key:"eviteObstacle",value:function(){this.recule(),this.corrigeTrajectoire()}},{key:"corrigeTrajectoire",value:function(){if("actif"==this.etat){var e=Math.floor(Math.random()*Math.floor(2e3)),t=this.cibleMonstre[0];this.x>t?this.gauche():this.droite(),this.x<t+30&&this.x>t-30&&this.body.setVelocityX(0);var n=this;setTimeout((function(){n.avance()}),e)}}},{key:"creeAnimations",value:function(e,t){e.anims.create({key:"monster-walk-left",frames:e.anims.generateFrameNames(t,{start:9,end:11,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"monster-walk-right",frames:e.anims.generateFrameNames(t,{start:3,end:5,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"monster-walk-up",frames:e.anims.generateFrameNames(t,{start:0,end:2,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"monster-walk-down",frames:e.anims.generateFrameNames(t,{start:6,end:8,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:3,repeat:-1}),e.anims.create({key:"monster-stand",frames:e.anims.generateFrameNames(t,{start:7,end:7,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:1,repeat:0}),e.anims.create({key:"monster-brule",frames:e.anims.generateFrameNames(t,{start:12,end:25,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:4,repeat:0})}}])&&p(t.prototype,n),s}(o);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(s,Phaser.GameObjects.Sprite);var t,n,r,i,o=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(i){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function s(e,t,n,r,i,a){var c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(c=o.call(this,e,t,n,a,0)).setScale(1),c.setDepth(r),c.creeAnimations(e,i),c.etat="actif",c.play("actif"),c}return t=s,(n=[{key:"creeAnimations",value:function(e,t){e.anims.create({key:"actif",frames:e.anims.generateFrameNames(t,{start:0,end:5,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:6,repeat:-1}),e.anims.create({key:"stand",frames:e.anims.generateFrameNames(t,{start:0,end:0,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:1,repeat:0})}}])&&g(t.prototype,n),s}();function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(s,Phaser.GameObjects.Sprite);var t,n,r,i,o=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(i){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function s(e,t,n,r,i,a){var c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(c=o.call(this,e,t,n,a,0)).setScale(1),c.setDepth(r),c.dureeDeVie=1e4,c.creeAnimations(e,i),c.scene.physics.world.enable(_(c)),c.etat="pose",c.play("pose"),setTimeout((function(){c.explose()}),c.dureeDeVie),c}return t=s,(n=[{key:"explose",value:function(){"pose"==this.etat&&(this.etat="end",this.play("end"),this.scene.physics.world.disable(this))}},{key:"creeAnimations",value:function(e,t){var n,r;e.anims.create((x(n={key:"pose",frames:e.anims.generateFrameNames(t,{start:0,end:9,zeroPad:1,prefix:t+" ",suffix:".png"}),frameRate:4,repeat:0,repeatDelay:0,yoyo:!1,skipMissedFrames:!0,defaultTextureKey:null,delay:0},"frameRate",null),x(n,"duration",null),x(n,"timeScale",1),x(n,"showOnStart",!1),x(n,"hideOnComplete",!1),n)),e.anims.create((x(r={key:"end",frames:e.anims.generateFrameNames(t,{start:9,end:15,zeroPad:0,prefix:t+" ",suffix:".png"}),frameRate:.5,repeat:1,repeatDelay:0,yoyo:!1,skipMissedFrames:!0,defaultTextureKey:null,delay:0},"frameRate",null),x(r,"duration",null),x(r,"timeScale",1),x(r,"showOnStart",!1),x(r,"hideOnComplete",!0),r))}}])&&O(t.prototype,n),s}();function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(s,e);var t,n,r,i,o=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(r);if(i){var n=Y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function s(e,t,n,r,i,a,c,u,f,l){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),o.call(this,e,t,n,r,i,a,c,u,f,l)}return t=s,(n=[{key:"avance",value:function(){"actif"==this.etat&&(this.directionY="up",this.play("monster-walk-up"),this.body.setVelocityY(-this.vitesse))}},{key:"corrigeTrajectoire",value:function(){if("actif"==this.etat){var e=Math.floor(Math.random()*Math.floor(3e3)),t=this.scene.sorciere.x,n=this.scene.sorciere.y;this.x>t?this.gauche():this.droite(),this.y>n?this.avance():this.recule(),this.y<n+10&&this.y>n-10&&this.body.setVelocityY(0),this.x<t+10&&this.x>t-10&&this.body.setVelocityX(0);var r=Math.floor(Math.random()*Math.floor(10));if(r>6)switch(r){case 7:this.recule();break;case 8:this.avance();break;case 9:this.gauche();break;case 10:this.droite();break;default:this.avance()}var i=this;setTimeout((function(){i.corrigeTrajectoire()}),e)}}}])&&N(t.prototype,n),s}(b);function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e,t){return!t||"object"!==z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(s,Phaser.Scene);var t,n,r,i,o=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(i){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=o.call(this,{key:"gameScene"})).niveauDuJeu=e,t.sorciere,t.doorKeeper,t.mapLayers=new Map,t.monstres,t.mines,t.pentagrammes=new Map,t.spaceVerrou=!1,t.textScore,t.textMonstresPasses,t.score=0,t.nbMonstresMorts,t.nbMonstresPasses,t.textMonstresMorts,t.nbMontresTotal,t.bossDeFinDeNiveau,t.bossDeFinDeNiveauVaincu,t.bossDeFinDeNiveauFight,t.finDuJeu,t.delaiVagueMonstre=5e3,t.coordonneesPorte=[835,403],t}return t=s,(n=[{key:"init",value:function(){}},{key:"preload",value:function(){this.load.image("tiles","./src/assets/tilemaps/images/atakala.png"),this.load.tilemapTiledJSON("map","./src/assets/tilemaps/atakala_map.json"),this.load.atlas("hero","./src/assets/sprites/images/hero-sheet.png","./src/assets/sprites/hero.json"),this.load.atlas("monster-sheet","./src/assets/sprites/images/monster-sheet2.png","./src/assets/sprites/monster.json"),this.load.atlas("pentagramme","./src/assets/sprites/images/pentagramme.png","./src/assets/sprites/pentagramme.json"),this.load.atlas("bomb-sheet","./src/assets/sprites/images/bomb-sheet.png","./src/assets/sprites/bomb.json"),this.load.atlas("door-sheet","./src/assets/sprites/images/door.png","./src/assets/sprites/door.json"),this.load.image("coeur","./src/assets/images/heart.png"),this.load.image("mana","./src/assets/images/mana.png")}},{key:"create",value:function(){var e=this;this.score=0,this.cameras.main.setBounds(32,32,1600,1600),this.physics.world.setBounds(0,0,1600,1600);var t=this.make.tilemap({key:"map"}),n=t.addTilesetImage("atakala","tiles"),r=t.createDynamicLayer("decor",n,32,32),i=t.createDynamicLayer("mur",n,32,32),o=t.createStaticLayer("chemins",n,32,32),s=t.createStaticLayer("pnj",n,32,32),a=t.createDynamicLayer("mur_invisible_sans_porte",n,32,32);i.setCollisionByExclusion([-1]),a.setCollisionByExclusion([-1]),i.setDepth(100),s.setDepth(101),this.doorKeeper=this.physics.add.staticSprite(this.coordonneesPorte[0]-3,this.coordonneesPorte[1]-105,"door-sheet"),this.physics.world.enable(this.doorKeeper),this.mapLayers.set("decor",r),this.mapLayers.set("chemins",o),this.mapLayers.set("pnj",s),this.mapLayers.set("mur_invisible_sans_porte",a),this.sorciere=new l(this,800,600,100,"hero","sorciere",10,300),this.add.existing(this.sorciere,0),this.physics.add.collider(this.sorciere,a),this.imageGroupCoeur=this.add.group(),this.imageGroupMana=this.add.group(),this.cameras.main.roundPixels=!0,this.cursors=this.input.keyboard.createCursorKeys(),this.cameras.main.startFollow(this.sorciere,!0,.08,.08),this.anims.create({key:"door-blush",frames:this.anims.generateFrameNames("door-sheet",{start:0,end:11,zeroPad:1,prefix:"door ",suffix:".png"}),frameRate:20,repeat:0}),this.physics.add.collider(this.sorciere,this.doorKeeper,(function(){e.doorKeeper.play("door-blush"),e.sorciere.ejecteDeLaPorte()}),null,null),this.textScore=this.add.text(780,5,"Score : "+this.score,{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:"20px",color:"white"}),this.textScore.setScrollFactor(0).setDepth(1e3),this.textMonstresPasses=this.add.text(780,30,"Monstres passés : "+this.nbMonstresPasses+"/10",{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:"20px",color:"white"}),this.textMonstresPasses.setScrollFactor(0).setDepth(1e3),this.textMonstresMorts=this.add.text(780,55,"Monstres tués : "+this.nbMonstresMorts+"/"+this.nbMontresTotal,{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:"20px",color:"white"}),this.textMonstresMorts.setScrollFactor(0).setDepth(1e3),this.monstres=this.add.group(),this.mines=this.add.group(),this.startPlaying()}},{key:"afficheText",value:function(e,t,n,r){var i=this.add.text(n,r,e,{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:"40px",color:"white"}).setScrollFactor(0).setDepth(1e3);setTimeout((function(){i.destroy()}),t)}},{key:"startPlaying",value:function(){var e=this;this.nbMonstresMorts=0,this.nbMonstresPasses=0,this.textMonstresMorts,this.nbMontresTotal=5*this.niveauDuJeu.nbMonstresParZone,this.bossDeFinDeNiveauVaincu=!1,this.bossDeFinDeNiveauFight=!1,this.finDuJeu=!1,this.majPtsVieEcran(),this.majPtsManaEcran(),this.textMonstresPasses.setText("Monstres passés : "+this.nbMonstresPasses+"/10"),this.textMonstresMorts.setText("Monstres tués : "+this.nbMonstresMorts+"/"+this.nbMontresTotal),this.niveauDuJeu.num>1?this.afficheText("You won this battle !",2800,300,400):(this.afficheText("Monsters are coming...\nProtect the gate ! ",2800,300,400),this.generePentagrammes()),setTimeout((function(){e.afficheText("Niveau "+e.niveauDuJeu.num+"... Ready ?",3e3,300,400)}),3e3),setTimeout((function(){e.genereMonstres(0,e.delaiVagueMonstre)}),6e3)}},{key:"majPtsVieEcran",value:function(){this.imageGroupCoeur.clear(!0);for(var e=0;e<this.sorciere.ptsVie;e++){var t=this.add.image(30+10*e,760,"coeur").setScrollFactor(0).setDepth(1e3);this.imageGroupCoeur.add(t)}this.checkFinDeNiveau()}},{key:"majPtsManaEcran",value:function(){if(!this.finDuJeu){this.imageGroupMana.clear(!0);for(var e=0;e<this.sorciere.mana;e++){var t=this.add.image(870+10*e,760,"mana").setScrollFactor(0).setDepth(1e3);this.imageGroupMana.add(t)}}}},{key:"hitMine",value:function(e,t){setTimeout((function(){t.perdPtDeVie()}),1e3),e.explose()}},{key:"augmenteScore",value:function(e){this.score=this.score+e,this.textScore.setText("Score : "+this.score)}},{key:"augmenteMonstresPasses",value:function(){this.nbMonstresPasses=this.nbMonstresPasses+1,this.textMonstresPasses.setText("Monstres passés : "+this.nbMonstresPasses+"/10"),this.checkFinDeNiveau()}},{key:"augmenteMonstresMort",value:function(){this.bossDeFinDeNiveauFight?(this.augmenteScore(100*this.niveauDuJeu.num),this.bossDeFinDeNiveauVaincu=!0):(this.nbMonstresMorts=this.nbMonstresMorts+1,this.textMonstresMorts.setText("Monstres tués : "+this.nbMonstresMorts+"/"+this.nbMontresTotal),this.augmenteScore(10*this.niveauDuJeu.num)),this.checkFinDeNiveau()}},{key:"generePentagrammes",value:function(){for(var e=[400,400,800,1200,1200],t=[800,1200,1400,1200,800],n=0;n<5;n++){var r="pentagramme"+n,i=new D(this,e[n],t[n],5,"pentagramme",r);this.add.existing(i,1),this.pentagrammes.set(r,i)}}},{key:"genereBossFinDeNiveau",value:function(){var e=this;this.bossDeFinDeNiveauFight=!0,this.monstres.clear(!0);var t=this.pentagrammes.get("pentagramme2"),n="monstreBoss"+this.niveauDuJeu.num;this.bossDeFinDeNiveau=new J(this,t.x,t.y,50,this.sorciere,"monster-sheet","boss",n,10,this.niveauDuJeu.vitesseBoss),this.physics.add.collider(this.bossDeFinDeNiveau,this.sorciere,(function(){"actif"==e.bossDeFinDeNiveau.etat&&(e.bossDeFinDeNiveau.corrigeTrajectoire(),e.sorciere.perdPointsDeVie(1))}),null,null),this.add.existing(this.bossDeFinDeNiveau,0),this.bossDeFinDeNiveau.avance(),this.bossDeFinDeNiveau.corrigeTrajectoire()}},{key:"checkFinDeNiveau",value:function(){var e=this;this.sorciere.ptsVie<1?this.finDeNiveau(1):this.nbMonstresPasses>9?this.finDeNiveau(2):this.nbMonstresPasses+this.nbMonstresMorts==this.nbMontresTotal&&(this.bossDeFinDeNiveauFight&&this.bossDeFinDeNiveauVaincu?this.finDeNiveau(3):(this.afficheText("Boss is coming... For you !",5e3,500,500),this.spaceVerrou=!0,setTimeout((function(){e.genereBossFinDeNiveau(),e.spaceVerrou=!0}),5e3)))}},{key:"finDeNiveau",value:function(e){var t=this;switch(e){case 0:break;case 1:this.arreteJeu(),this.sorciere.dead(),this.afficheText("You're dead... Too weak",5e3,300,500),setTimeout((function(){t.scene.start("endScene")}),5e3);break;case 2:this.arreteJeu(),this.afficheText("You failed ! Too dumb",5e3,300,500),setTimeout((function(){t.scene.start("endScene")}),5e3);break;case 3:this.niveauDuJeu.getNiveauSuperieur(),this.startPlaying()}}},{key:"arreteJeu",value:function(){this.finDuJeu=!0,null!=this.bossDeFinDeNiveau&&(this.bossDeFinDeNiveau.etat="inactif"),this.monstres.children.each((function(e){e.etat="inactif"})),this.mines.children.each((function(e){e.etat="end"}))}},{key:"update",value:function(){if(!this.finDuJeu){if(this.input.keyboard.addKey("SPACE").isUp&&(this.spaceVerrou=!1),this.input.keyboard.addKey("SPACE").isDown&&"actif"==this.sorciere.etat&&this.sorciere.mana>0&&!this.spaceVerrou){var e=new T(this,this.sorciere.x,this.sorciere.y,5,"bomb-sheet","bombe");this.add.existing(e,1),this.mines.add(e),this.sorciere.perdPointsDeMana(1),this.spaceVerrou=!0,this.physics.add.overlap(e,this.monstres,this.hitMine,null,null),this.bossDeFinDeNiveauFight&&this.physics.add.overlap(e,this.bossDeFinDeNiveau,this.hitMine,null,null)}"actif"==this.sorciere.etat&&(this.sorciere.bougeX(this.cursors.left.isDown,this.cursors.right.isDown),this.sorciere.bougeY(this.cursors.up.isDown,this.cursors.down.isDown),this.cursors.up.isUp&&this.cursors.down.isUp&&this.cursors.right.isUp&&this.cursors.left.isUp&&this.sorciere.resteImmobile("actif",0,0))}}},{key:"genereMonstres",value:function(e,t){var n=this;if(!this.bossDeFinDeNiveauFight){var r,i=0,o=0,s=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}(this.pentagrammes.values());try{for(s.s();!(r=s.n()).done;){var a=r.value;if(this.finDuJeu)return;o=Math.floor(Math.random()*Math.floor(4e3)),setTimeout((function(t){if(!n.bossDeFinDeNiveauFight&&!n.finDuJeu){var r="monstre"+i+e,o=new b(n,t.x,t.y,50,n.coordonneesPorte,"monster-sheet","monstre",r,1,n.niveauDuJeu.vitesseMonstre),s=n.mapLayers.get("mur_invisible_sans_porte");n.monstres.add(o),n.physics.add.collider(o,s,(function(){o.eviteObstacle()}),null,null),n.physics.add.collider(o,n.sorciere,(function(){o.eviteObstacle(),"actif"==o.etat&&n.sorciere.perdPointsDeVie(10)}),null,null),n.add.existing(o,0),o.avance()}}),o,a),i++}}catch(e){s.e(e)}finally{s.f()}if(++e<this.niveauDuJeu.nbMonstresParZone){if(this.finDuJeu)return;setTimeout((function(){n.genereMonstres(e,t)}),t+o)}}}}])&&X(t.prototype,n),s}();function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(s,Phaser.Scene);var t,n,r,i,o=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(i){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Z(this,e)});function s(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),o.call(this,{key:"titleScene"})}return t=s,(n=[{key:"preload",value:function(){this.load.image("background","./src/assets/images/background.png")}},{key:"create",value:function(){var e=this;this.add.sprite(0,0,"background").setOrigin(0,0);var t=this.add.text(300,300,"Welcome to my game !!!",{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:"35px",backgroundColor:"grey",color:"white"});t.setInteractive({useHandCursor:!0}),t.on("pointerdown",(function(){return e.clickButton()}))}},{key:"clickButton",value:function(){this.scene.start("gameScene")}}])&&K(t.prototype,n),s}();function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ee(e,t){return!t||"object"!==$(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ne=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(s,Phaser.Scene);var t,n,r,i,o=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=te(r);if(i){var n=te(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return ee(this,e)});function s(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(n=o.call(this,{key:"endScene"})).gamePlay=t,n.niveauDuJeu=e,n}return t=s,(n=[{key:"init",value:function(){}},{key:"preload",value:function(){this.load.image("background","./src/assets/images/background.png")}},{key:"create",value:function(){var e=this;this.add.sprite(0,0,"background").setOrigin(0,0);var t=this.add.text(300,300,"This is the end ! Niveau :"+this.niveauDuJeu.num+" score : "+this.gamePlay.score,{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:"35px",backgroundColor:"grey",color:"white"});t.setInteractive({useHandCursor:!0}),t.on("pointerdown",(function(){return e.clickButton()}))}},{key:"clickButton",value:function(){this.niveauDuJeu.raz(),this.scene.start("titleScene")}}])&&q(t.prototype,n),s}();function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ie=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.raz()}var t,n;return t=e,(n=[{key:"getNiveauSuperieur",value:function(){this.num++,this.nbMonstresParZone++,this.vitesseBoss=this.vitesseBoss+5,this.vitesseMonstre=this.vitesseMonstre+2}},{key:"raz",value:function(){this.num=1,this.nbMonstresParZone=2,this.vitesseMonstre=30,this.vitesseBoss=100}}])&&re(t.prototype,n),e}();function oe(e){return(oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e,t){return(se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ae(e,t){return!t||"object"!==oe(t)&&"function"!=typeof t?ce(e):t}function ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ue(e){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var fe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&se(e,t)}(i,Phaser.Game);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=ue(t);if(n){var i=ue(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return ae(this,e)});function i(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var t={type:Phaser.AUTO,parent:"phaser-example",width:1e3,height:800,pixelArt:!0,physics:{default:"arcade"},scene:{}};return(e=r.call(this,t)).niveauDuJeu=new ie,e.gamePlay=new I(e.niveauDuJeu),e.scene.add("titleScene",new W(ce(e))),e.scene.add("gameScene",e.gamePlay),e.scene.add("endScene",new ne(e.niveauDuJeu,e.gamePlay)),e.scene.start("titleScene"),e}return i}();window.onload=function(){new fe}})();