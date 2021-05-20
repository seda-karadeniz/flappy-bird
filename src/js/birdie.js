import ground from "./ground";

const birdie ={
    game: null,
    frames: [
        {sx:6, sy:982},
        {sx:62,sy:982},
        {sx:118,sy:982}
    ],
    width:34,
    height: 24,
    x:0,
    y:0,
    fallSpeed:0,
    maxFallSpeed : 7,


    update(){

        this.render();

    },

    init(game){
        this.game = game;
        this.x = this.width /2 + 3;
        this.y = (game.canvas.height -ground.frame.sh) / 2;

    },

    render(){
        this.game.context.save()
        this.game.context.translate(this.x,this.y);
        this.game.context.rotate(0);
        this.game.renderSpriteFrame({
            sx: this.frames[0].sx,
            sy:this.frames[0].sy,
            sw:this.width,
            sh:this.height,
            dx:-this.width/2,
            dy:-this.height / 2,
            dw:this.width,
            dh:this.height,

        })
        this.game.context.restore();
    },


}

export default birdie;