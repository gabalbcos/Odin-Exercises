//Functions 
    let add7 = (number) => number + 7;
    let multiply = (a, b) => a * b;
    let capitalize = (string) => {
        const str2 = string.charAt(0).toUpperCase() + string.slice(1);
        return str2;
        }
    let lastLetter = (string) => string.charAt(string.length - 1);

    //FizzBuzz Console Game
function fizzBuzz(){
    let number = parseInt(prompt(`Write a number`));
        for (let i = 1; i <= number; i++){
            if(i % 3 === 0 && i % 5 === 0){
                console.log('FizzBuzz');
            } else if(i % 3 === 0){
                    console.log('Fizz');
                } else if(i % 5 === 0){
                    console.log('Buzz');
                }
                else  {
                    console.log(i);
                }
        } 
    }

//Rock, Paper, Scissors Console Game
//score holder
let score = [];

//List of options
const options = ['rock', 'paper', 'scissors'];

//Functions to get the choices

function getComputerChoice(){
    let botChoice = options[Math.floor(Math.random()*3)];
    console.log(`Computer choose: ${botChoice}`);
    return botChoice;
}

function getPlayerChoice(){
    let playerMove = prompt(`Rock, Paper or Scissors?`).toLowerCase();
   //check for a valid input from the options list
    while (options.indexOf(playerMove) === -1) {
        playerMove = prompt('Select a valid option: Rock, Paper or Scissor.');}
    console.log(`You choose: ${playerMove}`);
    return playerMove;
}

//play one round of the game
function playRound(){
    //get computer + player choice 
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    //Round Comparison
    if (playerChoice === computerChoice){
        return "It's a draw!";}
        else if ((playerChoice === 'paper' && computerChoice === 'rock')||
        (playerChoice === 'rock' && computerChoice === 'scissors')||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
            return "You won this round!";}
        else {
            return "You lose this round!";}
}

//play game x Times
function game(gameTimes){
    //reset score
    score = [];
    
    //set score
        for (let i = 0; i < gameTimes; i++){
        let result = playRound();
        console.log(result);
        if (result === "You won this round!"){
            score.push(1);}
        else if (result === "You lose this round!") {
            score.push(-1);    
        } else { score.push(0);}
        console.log("Your score:" + score.reduce(function(a, b){return a + b}) + `/${gameTimes}`);
       }
    //end game result
        let totalScore = score.reduce(function(a, b){return a + b});
        if (totalScore > 0) {
            console.log("You won the game!");
        } else if (totalScore === 0){
            console.log("No winners in the game!");
        } else {console.log("You lost the game!");}
}


//Function to reverse a String
function reverseString(string){
//Separate words in a new array
    let splitedStringArray = string.split(" ");
//Iterate the array reverseing the words
    let reversedStringArray = splitedStringArray.reverse().map(word => word.split("").reverse().join(""));
    console.log(reversedStringArray.join(" "));
    return reversedStringArray.join(" ");
};