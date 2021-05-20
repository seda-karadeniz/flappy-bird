const gameController ={
    init(game){
      window.addEventListener('keydown', (e)=>{
          if(e.key === 'j'){
              if (!game.hasStarted){
                  game.hasStarted = true;
              }
              // fr monter l'oiseau
          }
      })
    },
}
export default gameController;