let randonNum= (parseInt(Math.random()*100 + 1));

const click= document.querySelector('#click');
const userInput= document.querySelector('#guessField');
const remaining= document.querySelector('.lastResult');
const result= document.querySelector('.result');
const startOver= document.querySelector('.resultParas');


const p= document.createElement('p');

let numberGuess= 1;

let playGame= true;

if(playGame===true){
    click.addEventListener('click',function(e){
        const guess= parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(guess == isNaN || guess < 1 || guess > 100){
        result.innerHTML= "give a valid number between 1 and 100";
        return;
    }
    else{
        checkGuess(guess);
    }
    
}

function checkGuess(guess){
    if(playGame=== false){
        return;
    }
    else{
        userInput.value=''
        if(guess === randonNum){
            result.innerHTML= "Congratulation!! You won.";
            endGame();
        }else if(guess < randonNum){
            result.innerHTML= "Guess a higher number";
        }
        else if(guess > randonNum){
            result.innerHTML= "Guess a lower number";
        }
        else{
            result.innerHTML= "Guess a valid number";
        }
        numberGuess++;
        remaining.innerHTML= `${Math.max(0,11 - numberGuess)}`
        if(numberGuess === 11){
            result.innerHTML= `Game Over. Random number was ${randonNum}`;
            endGame();
            return;
        }
    }
}    

function endGame(){
    userInput.value=''
    userInput.disabled= true;
    p.classList.add('button')
    p.innerHTML= `<h2 id="newgame">Start new Game</h2>`;
    startOver.appendChild(p)
    p.style.cursor= "pointer";
    playGame= false;
    newGame();
}


function newGame(){
    const newGameButton= document.querySelector('#newgame');
    newGameButton.addEventListener('click',function(e){
        randonNum = (parseInt(Math.random()*100 + 1));
        numberGuess = 1;
        remaining.innerHTML= `${Math.max(0,11 - numberGuess)}`
        result.innerHTML=''
        userInput.disabled= false;
        startOver.removeChild(p)
        playGame= true;
    })
}


