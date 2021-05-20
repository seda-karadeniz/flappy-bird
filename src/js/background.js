const background ={
    game: null,
    frame: {
        sx: 0, /*source en x*/
        sy: 0,
        sw: 0, /*largeur de limage */
        sh: 0, /*hauteur de limage*/
        /*quelle sont les coordonner du rectangle quil faut prendre*/
        dx: 0,
        dy: 0,
        dw: 0,
        dh: 0,
        /*les coordonner où il faut dessiner */
    },

    update(){
        this.game.renderSpriteFrame(this.frame)

    },

    init(game){
        this.game = game;
        this.frame.sw = game.canvas.width;
        this.frame.sh = game.canvas.height;
        this.frame.dw = game.canvas.width;
        this.frame.dh = game.canvas.height;
        /*mettre les valeurs comme ca plutot que les mettre an dur au dessus au cas où la taille du canvas change*/
    },


}

export default background;