const modeSelector = document.querySelector("#modeButton");
const instruccionsDiv = document.querySelector(".instructions");
const playerScore = document.querySelector(".player-score");
const rivalScore = document.querySelector(".rival-score");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const buttonsContainer = document.querySelector(".main-container")
let modeNumber = true;
let roundsCount = 0;
let resultText;

/* Listener for Mode selection, reset scores and also fixes the div */
modeSelector.addEventListener("click", ()=> {
let buttonContent = modeSelector.textContent;
if (modeNumber == true){
  modeSelector.textContent = "5 Rounds";
  modeNumber = false;
  playerScore.textContent = 0;
  rivalScore.textContent = 0;
  instruccionsDiv.textContent = "Best of 5 Mode, Good Luck!"
  roundsCount = 0;
}else{
  modeSelector.textContent = "Single Game";
  modeNumber = true
  playerScore.textContent = 0;
  rivalScore.textContent = 0;
  instruccionsDiv.textContent = "Free Play, Enjoy"
  roundsCount = 0;
}
});



/* funcion to get the computer choice */
const elections = new Array("Rock","Paper","Scissors");
function getComputerChoice (){
  let randomChoice = elections[Math.floor(Math.random() * 3)] 

return randomChoice 
}
/* This function converts the text of any election to numbers used on 
the algorithm  */
function passElection (text) {
  let textToPass = text.toLowerCase();
  if (textToPass =="rock"){
    return 1
  }
  if (textToPass =="paper"){
    return 2
  }
  if (textToPass =="scissors"){
    return 4
  }
}/* Event listener to Start the game(call singleGame function)
 also pass in the choice done */
buttonsContainer.addEventListener("click",(event) =>{
  let buttonSelected = event.target.id;
  if(modeNumber == true){
  singleGame(buttonSelected, getComputerChoice())
  }else{
    if(roundsCount == 6){
      playerScore.textContent = 0;
      rivalScore.textContent = 0;
      roundsCount = 0;
    }
    singleGame(buttonSelected, getComputerChoice())
     if(rivalScore.textContent == 3 || playerScore.textContent == 3){
        if(rivalScore.textContent > 2){
          resultText = "Bad Luck, Your Rival Won. Click any selection to play Again";
          instruccionsDiv.textContent = ""
          instruccionsPrinter(resultText);
          roundsCount = 6;
          console.log(roundsCount)

        }else{
          resultText = "Amazing, You are the Winner!!! Click any selection to play Again";
          instruccionsDiv.textContent = ""
          instruccionsPrinter(resultText);
          roundsCount = 6;
        }
     }
    }
})
/* Function to play a single game, gets elections and compares them
depending on it, changes its behaviour */
function singleGame(PlayerSelec, ComputerSelec){
  let playerNumb = passElection(PlayerSelec);
  let computerNumb = passElection(ComputerSelec);
  const gameResult = playerNumb - computerNumb;
  instruccionsDiv.textContent = "";


  if(gameResult == 0){
    resultText = `It Was a Tie, Both selected ${PlayerSelec}. Play Again`;
    instruccionsPrinter(resultText);
  }else{


    if(gameResult == 1 || gameResult == -3 || gameResult == 2){
      resultText = `Player Won, ${PlayerSelec} beats ${ComputerSelec}!!!`;
      playerScore.textContent = +playerScore.textContent + 1;
      if(modeNumber == false)roundsCount = roundsCount + 1;
      instruccionsPrinter(resultText);
    }else{
      resultText = `Rival Won, ${ComputerSelec} beats ${PlayerSelec}!`;
      rivalScore.textContent = +rivalScore.textContent + 1;
      if(modeNumber == false)roundsCount = roundsCount + 1;
      instruccionsPrinter(resultText);
    }
    console.log("single Game completed")
  }

}
function instruccionsPrinter(text){
let paragraphToPaste = document.createElement("P");
paragraphToPaste.textContent = text;
instruccionsDiv.appendChild(paragraphToPaste);
}

/* function playRound(){
  for (let i = 0; i < 5;i++){
    let seleccion = prompt("rock, paper or scissors");
    let computer_seleccion = getComputerChoice();
    console.log(round(seleccion,computer_seleccion))
  }
} */
