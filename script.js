const options = new Array("Rock","Paper","Scissors");
function getComputerChoice (){
  let randomChoice = options[Math.floor(Math.random() * 3)] 
console.log(randomChoice)
return randomChoice 
}



function round(playerSelection,computerSelection) {
  const jugador = playerSelection.toLowerCase();
  const computadora = computerSelection.toLowerCase();
  const jugadorNum = pasarEleccion(jugador);
  const computadoraNum = pasarEleccion(computadora)
  if (jugadorNum == 1 || jugadorNum == 2|| jugadorNum == 4){
    let resultado = jugadorNum - computadoraNum;
    
    
    if (resultado == 0) {return("Empate, ambos sacaron " + computadora)
}else if (resultado == 1 || resultado == -3 || resultado == 2){
     return(`Player, you won!! ${jugador} beats ${computadora}`)
    }else{
      return(`You lost!!, ${jugador} loses against ${computadora}`);
    }
  } else {
    console.log("Enter a valid option player")
  }
}

function pasarEleccion (texto) {
  let textoPasar = texto.toLowerCase();
  if (textoPasar =="rock"){
    return 1
  }
  if (textoPasar =="paper"){
    return 2
  }
  if (textoPasar =="scissors"){
    return 4
  }
}
function playRound(){
  for (let i = 0; i < 5;i++){
    let seleccion = prompt("rock, paper or scissors");
    let computer_seleccion = getComputerChoice();
    console.log(round(seleccion,computer_seleccion))
  }
}
