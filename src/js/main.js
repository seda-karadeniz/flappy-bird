
const game = {
  canvas: document.getElementById('game'),
  context: null,


  init () {
    this.context = this.canvas.getContext('2d');
      this.animate()

  },

  animate () {
    window.requestAnimationFrame(() => {
      this.animate()
    })

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

  },
}

game.init()
