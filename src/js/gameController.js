import birdie from "./birdie";

const gameController ={
    init(game){
      window.addEventListener('keydown', (e)=>{
          if(e.key === ' '){
              if (!game.hasStarted){
                  game.hasStarted = true;
              }
              birdie.goUp();
          }
          else if(e.key === 'j'){
              game.cancelAnimation();
              game.restart();
          }
      })
    },
}
export default gameController;