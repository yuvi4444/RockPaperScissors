let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    let random = Math.random()*10;
    let number = Math.floor(random)
    let choice = "";
    if(number>=0 && number<=3){
        return choice = "rock"
    }
    else if(number>3 && number<=6){
        return choice = "paper"
    }
    else return choice = "scissors"
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