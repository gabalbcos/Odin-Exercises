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
          }  
            
          else if(i % 3 === 0){
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


  function getComputerChoice(){
    //List of options
    const options = ['rock', 'paper', 'scissors'];
    let botChoice = options[Math.floor(Math.random()*3)];
    console.log(botChoice);
    return botChoice;
}

function playRound(){
    let playerChoice = prompt(`Rock, Paper or Scissors?`).toLowerCase();
    let b = getComputerChoice();
        //Round Comparisson
    if (playerChoice === b){
        return "It's a draw!";}
    else if ((playerChoice === 'paper' && b === 'rock')||
    (playerChoice === 'rock' && b === 'scissors')||
    (playerChoice === 'scissors' && b === 'paper')) {
         score++;
        return "You Win!";}
    else ((playerChoice === 'paper' && b === 'scissors')||
    (playerChoice === 'rock' && b === 'paper')||
    (playerChoice === 'scissors' && b === 'rock')){
        score--;
        return "You Lose!";}
}

function game(){
    let score = 0;
    
    console.log(score);
}
