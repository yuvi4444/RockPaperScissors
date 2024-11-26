let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    let choice = ["rock", "paper", "scissor"];
    let pick = Math.floor(Math.random()*3);
    return choice[pick];
}

function getHumanChoice(){
    let choice = prompt("Enter your choice: ", "rock");
    return choice.toLowerCase();
}

function playRound(computerChoice, humanChoice){
    console.log(computerChoice + " and " + humanChoice)
    if(computerChoice === "rock" && humanChoice === "paper"){
        console.log("You WIN!!!")
        humanScore++
    }
    if(computerChoice === "rock" && humanChoice === "scissors"){
        console.log("You LOSE!!!")
        computerScore++
    }
    if(computerChoice === "paper" && humanChoice === "rock"){
        console.log("You LOSE!!!")
        computerScore++
    }
    if(computerChoice === "paper" && humanChoice === "scissors"){
        console.log("You WIN!!!")
        humanScore++
    }
    if(computerChoice === "scissors" && humanChoice === "rock"){
        console.log("You WIN!!!")
        humanScore++
    }
    if(computerChoice === "scissors" && humanChoice === "paper"){
        console.log("You LOSE!!!")
        computerScore++
    }
}


function playGame(){
    for(let i=1; i<6; i++){
        playRound(getComputerChoice(), getHumanChoice())
        console.log("Human score: " + humanScore + "\nComputer score: " + computerScore)
    }
    if(humanScore>computerScore) console.log("You WON the game!!")
    else console.log("You LOST the game")
}

playGame()