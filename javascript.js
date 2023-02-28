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

