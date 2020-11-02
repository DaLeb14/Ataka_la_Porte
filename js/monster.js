class Monster extends Unit
{

   constructor (scene, x, y, z, texture, type, hp, damage, cibleMonstre)
    {
        super(scene, x, y, z, texture, type, hp, damage);
		 //this.flipX = true;
        
		//Agrandissement
        this.setScale(1.3);
		
		scene.physics.add.existing(this);
		
		this.creeAnimations(scene, texture);
		this.cibleMonstre = cibleMonstre;
		
		this.direction = "up";
		this.play('monster-walk-up');
		
	}

	avance()
	{
		this.direction = "up";
		this.play('monster-walk-up');
		this.body.setVelocityY(-30);
		
		var meAndMylself = this;
		setTimeout(function () {meAndMylself.corrigeTrajectoire(); }, 3000);
	}
	
	gauche()
	{
		this.direction = "left";
		this.play('monster-walk-left');
		this.body.setVelocityX(-30);
	}
	
	recul()
	{
		this.direction = "down";
		this.play('monster-walk-down');
		this.body.setVelocityY(30);
	}
	
		droite()
	{
		this.direction = "right";
		this.play('monster-walk-right');
		this.body.setVelocityX(30);
	}
	
	
	eviteObstacle()
	{
		this.recul();
		this.corrigeTrajectoire();
	}
	
	
	corrigeTrajectoire()
	{
		let marcheDevant = Math.floor(Math.random() * Math.floor(2000));
		let porteX = cibleMonstre[0];
		
		if(this.x > porteX)
		{
			this.gauche();
		}
		else
		{
			this.droite();
		}
		
		if(this.x < porteX +30 && this.x > porteX  - 30)
		{
			this.body.setVelocityX(0);
		}

		var meAndMylself = this;
		setTimeout(function () {meAndMylself.avance();}, marcheDevant);
		
	}
	

	
	creeAnimations(scene, texture)
	{
		scene.anims.create({
            key: 'monster-walk-left',
            frames: scene.anims.generateFrameNames(texture, {
                start: 10,
                end: 12,
                zeroPad: 1,
                prefix: texture+' ',
                suffix: '.png'
            }),
            frameRate: 3,
            repeat: -1
        }); 

		scene.anims.create({
            key: 'monster-walk-right',
            frames: scene.anims.generateFrameNames(texture, {
                start: 4,
                end: 6,
                zeroPad: 1,
                prefix: texture+' ',
                suffix: '.png'
            }),
            frameRate: 3,
            repeat: -1
        });

		scene.anims.create({
            key: 'monster-walk-up',
            frames: scene.anims.generateFrameNames(texture, {
                start: 1,
                end: 3,
                zeroPad: 1,
                prefix: texture+' ',
                suffix: '.png'
            }),
            frameRate: 3,
            repeat: -1
        });

		scene.anims.create({
            key: 'monster-walk-down',
            frames: scene.anims.generateFrameNames(texture, {
                start: 7,
                end: 9,
                zeroPad: 1,
                prefix: texture+' ',
                suffix: '.png'
            }),
            frameRate: 3,
            repeat: -1
        });		
		
		scene.anims.create({
            key: 'monster-stand',
            frames: scene.anims.generateFrameNames(texture, {
                start: 8,
                end: 8,
                zeroPad: 1,
                prefix: texture+' ',
                suffix: '.png'
            }),
            frameRate: 1,
            repeat: 0
        });		
    }
	}
/*          changeFrame: function ()
        {
            this.f++;

            var delay = this.anim.speed;

            if (this.f === this.anim.endFrame)
            {
                switch (this.motion)
                {
                    case 'walk':
                        this.f = this.anim.startFrame;
                        this.frame = this.texture.get(this.direction.offset + this.f);
                        scene.time.delayedCall(delay * 1000, this.changeFrame, [], this);
                        break;

                    case 'attack':
                        delay = Math.random() * 2;
                        scene.time.delayedCall(delay * 1000, this.resetAnimation, [], this);
                        break;

                    case 'idle':
                        delay = 0.5 + Math.random();
                        scene.time.delayedCall(delay * 1000, this.resetAnimation, [], this);
                        break;

                    case 'die':
                        delay = 6 + Math.random() * 6;
                        scene.time.delayedCall(delay * 1000, this.resetAnimation, [], this);
                        break;
                }
            }
            else
            {
                this.frame = this.texture.get(this.direction.offset + this.f);

                scene.time.delayedCall(delay * 1000, this.changeFrame, [], this);
            }
        },

        resetAnimation: function ()
        {
            this.f = this.anim.startFrame;

            this.frame = this.texture.get(this.direction.offset + this.f);

            scene.time.delayedCall(this.anim.speed * 1000, this.changeFrame, [], this);
        },

         update: function ()
        {
            if (this.motion === 'walk')
            {
                this.x += this.direction.x * this.speed;

                if (this.direction.y !== 0)
                {
                    this.y += this.direction.y * this.speed;
                    this.depth = this.y + 64;
                }

                //  Walked far enough?
                if (Phaser.Math.Distance.Between(this.startX, this.startY, this.x, this.y) >= this.distance)
                {
                    this.direction = directions[this.direction.opposite];
                    this.f = this.anim.startFrame;
                    this.frame = this.texture.get(this.direction.offset + this.f);
                    this.startX = this.x;
                    this.startY = this.y;
                }
            }
        } */

   

 

