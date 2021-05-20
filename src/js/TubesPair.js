export default class TubesPair{
    constructor(game) {
        this.game = game;
        this.spaceBetweenTubes =  80;
        this.x = game.canvas.width;

        this.speed =  3;
        this.width = 52;
        this.height = 317;
        this.yTop = -Math.floor(Math.random() * 280) -25;
        this.yBottom = this.yTop + this.height + this.spaceBetweenTubes;

        this.tubeTopFrame = {
            sx: 113, /*source en x*/
            sy: 647,
            sw: this.width, /*largeur de limage */
            sh: this.height, /*hauteur de limage*/
            /*quelle sont les coordonner du rectangle quil faut prendre*/
            dx: 0,
            dy: 0,
            dw: this.width,
            dh: this.height,
            /*les coordonner où il faut dessiner */

        }
        this.tubeBottomFrame = {
            sx: 168, /*source en x*/
            sy: 647,
            sw: this.width, /*largeur de limage */
            sh: this.height, /*hauteur de limage*/
            /*quelle sont les coordonner du rectangle quil faut prendre*/
            dx: 0,
            dy: 0,
            dw: this.width,
            dh: this.height,
            /*les coordonner où il faut dessiner */
        }

    }

    update(){
        this.x -= this.speed;
        this.render();
    }

    render(){
        /*tube du haut*/
        this.game.context.save();
        this.game.context.translate(this.x, this.yTop);
        this.game.renderSpriteFrame(this.tubeTopFrame);
        this.game.context.restore();

        /*tube du bas*/
        this.game.context.save();
        this.game.context.translate(this.x, this.yBottom);
        this.game.renderSpriteFrame(this.tubeBottomFrame);
        this.game.context.restore();
    }


}