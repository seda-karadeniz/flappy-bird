import ground from "./ground";

const birdie ={
    game: null,
    frames: [
        {sx:7, sy:982},
        {sx:63,sy:982},
        {sx:119,sy:982}
    ],
    maxAnimationStep: 0,
    animationStep:0,
    counterIntervall: 0,
    maxIntervall: 5,
    width:32,
    height: 23,
    x:0,
    y:0,
    fallSpeed:0,
    maxFallSpeed : 7,
    chanceCounter : 2,
    loseParagraph : document.createElement('p'),
    loseBtnRestart : document.createElement('input'),
    isButtonAlreadySet : false,




    init(game){
        this.game = game;
        this.x = this.width /2 + 3;
        this.y = (game.canvas.height -ground.frame.sh) / 2;
        this.maxAnimationStep = this.frames.length-1;
        this.fallSpeed = 0;
        this.maxFallSpeed = 7;


        },

    update(){
        if (this.game.hasStarted){
            if (this.fallSpeed < this.maxFallSpeed){
                this.fallSpeed += this.game.gravity;
            }
            this.y += this.fallSpeed;
            this.checkCollisionWithTubes();
            this.checkCollisionWithGround();
        }

        this.render();
    },

    render(){
        this.counterIntervall++;
        if (!(this.counterIntervall % this.maxIntervall)){
            this.counterIntervall = 0;
            this.animationStep = this.animationStep < this.maxAnimationStep ? this.animationStep + 1 : 0; /*si animation step sera incrementer de un si animation step est plus petit que max animation step sinon remet 0*/

        }
        this.game.context.save()
        this.game.context.translate(this.x,this.y);
        this.game.context.rotate(this.fallSpeed / this.maxFallSpeed);
        this.game.renderSpriteFrame({
            sx: this.frames[this.animationStep].sx,
            sy: this.frames[this.animationStep].sy,
            sw:this.width,
            sh:this.height,
            dx:-this.width/2,
            dy:-this.height / 2,
            dw:this.width,
            dh:this.height,

        })
        this.game.context.restore();
    },

    goUp(){
        this.fallSpeed = -this.maxFallSpeed;
    },

    checkCollisionWithGround(){
        if (this.y + this.height / 2 > ground.frame.dy){
            this.y = ground.frame.dy - this.height / 2;
            this.goUp();
            /*qd loiseau tombe sa vitesse de chute est a maxfallspeed donc inverser*/

        }
    },

    checkCollisionWithTubes(){
        this.game.tubesPairs.forEach(tubePair=>{
            if (this.x + this.width / 2 > tubePair.x && this.x -this.width/ 2 < tubePair.x + tubePair.width){
                if ((this.y - this.height/2) < tubePair.yTop + tubePair.height
                    || (this.y+ this.height/2 ) > tubePair.yBottom){
                    this.game.cancelAnimation();
                    this.chanceCounter--;
                    if (this.chanceCounter > 0){
                        this.game.restart();
                    }
                    else{
                       this.btn();

                    }

                }
            }
        })
    },

    btn(){

        this.loseParagraph.textContent = 'dommage vous avez perdue toutes vos chance';
        this.loseBtnRestart.setAttribute('type', 'submit');
        this.loseBtnRestart.setAttribute('value', 'Cliquez ici pour recommencer');

        if (!this.isButtonAlreadySet){
            this.isButtonAlreadySet = true;
            this.loseBtnRestart.addEventListener('click',()=>{
                this.chanceCounter = 1;
                this.game.restart();
            });
        }

        document.body.insertAdjacentElement("afterbegin", this.loseBtnRestart);
        document.body.insertAdjacentElement("afterbegin", this.loseParagraph);


    },


}

export default birdie;