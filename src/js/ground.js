const ground ={
    game: null,
    frame: {
        sx: 584, /*source en x*/
        sy: 0,
        sw: 336, /*largeur de limage */
        sh: 112, /*hauteur de limage*/
        /*quelle sont les coordonner du rectangle quil faut prendre*/
        dx: 0,
        dy: 0,
        dw: 336,
        dh: 112,
        /*les coordonner où il faut dessiner */
    },
    speed:3,
    maxOffset : 0,

    update(){
        if (this.frame.dx <= -this.maxOfsset){
            this.frame.dx = 0;
        }
        this.frame.dx -= this.speed;
        this.game.renderSpriteFrame(this.frame)

    },

    init(game){
        this.game = game;
        this.maxOfsset = this.frame.sw - game.canvas.width;
        /*limage est plus grande que le canvas */
        this.frame.dy = game.canvas.height - this.frame.sh;
        /*lemplacement où on veux que le sol soit dessiner, dans le bas du canvas*/
    },


}

export default ground;