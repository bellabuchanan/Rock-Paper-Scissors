let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let output = document.getElementById('info-text');

let pScore = document.getElementById('player-tracker');
let cScore = document.getElementById('computer-tracker');
let playerScore = 0;
let computerScore = 0;


function computerPlay(){
    computerAnswer = Math.floor(Math.random() * 3) + 1  
    if (computerAnswer == 1) {
        answer = "rock"
    }
    else if (computerAnswer == 2) {
        answer = "paper"
    }

    else {
        answer = "scissors"
    }
    return answer
  }
  
function playRound(playerSelection, computerSelection) {
      
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
      
    if (playerSelection == computerSelection) {
        result = "draw"
    } 
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        result = "You win! Rock beats scissors"
    }

    else if (playerSelection == "rock" && computerSelection == "paper"){
        result = "You lose! Paper beats rock"
    }

    else if (playerSelection == "paper" && computerSelection == "scissors"){
        result = "You lose! Scissors beats paper"
    }

    else if (playerSelection == "paper" && computerSelection == "rock"){
        result = "You win! Paper beats rock"
    }

    else if (playerSelection == "scissors" && computerSelection == "rock"){
        result = "You lose! Rock beats scissors"
    }

    else if (playerSelection == "scissors" && computerSelection == "paper"){
        result = "You win! Scissors beats paper"
    }

    else {
        result = "Player entered invalid result"
    }

    return result
}
/*
rock.addEventListener('click', (e) => {

    playerSelection = 'rock';
    
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    output.textContent = result
    info.style.backgroundColor = '#5DFF75'
});
*/

const buttons=Array.from(document.querySelectorAll("button"));
buttons.forEach(button => button.addEventListener('click', (e) => {
    const playerSelection=e.target.value;
    console.log("playerSelection");
    let computerSelection=computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    output.textContent = result;
    //info.style.backgroundColor = '#5DFF75';

    if (result.includes("win")) {
        playerScore+=1;
        info.style.backgroundColor = "lightgreen"
    }

    

        else if (result.includes("lose")) {
            computerScore+=1;
            info.style.backgroundColor = "red"
        }

    

        else {
            info.style.backgroundColor = "yellow"
        }
    pScore.textContent = `Your score: ${playerScore}`;
    cScore.textContent = `Computer's score: ${computerScore}`;

    
}));

function score() {
    score = 0
    for (i = 0; i < 5; i++) {
        
        this_round = playRound(player, computer)
        if (this_round.includes("win")) {
            score+=1
        }
    }
    return "Your final score is " + score + " out of 5"
    }

function game() {
score = 0
for (i = 0; i < 5; i++) {
    player = prompt("Rock, paper, or scissors?")
    computer = computerPlay()
    this_round = playRound(player, computer)
    if (this_round.includes("win")) {
        score+=1
    }
}
return "Your final score is " + score + " out of 5"
}
