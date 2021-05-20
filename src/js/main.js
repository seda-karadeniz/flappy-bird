import background from "./background";

const game = {
  canvas: document.getElementById('game'),
  context: null,
  spriteSheetSrc: './resources/sprite.png',
  sprite: new Image(),


  init () {
    this.context = this.canvas.getContext('2d');
    this.sprite.src = this.spriteSheetSrc;
    this.sprite.addEventListener('load', ()=>{
      background.init(this);
      this.animate();
    })


  },

  animate () {
    window.requestAnimationFrame(() => {
      this.animate();
    })

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    background.update();
  },

  renderSpriteFrame(coordinates){
    this.context.drawImage(
        this.sprite,
        coordinates.sx,
        coordinates.sy,
        coordinates.sw,
        coordinates.sh,
        coordinates.dx,
        coordinates.dy,
        coordinates.dw,
        coordinates.dh,
        );
  },
}

game.init()
