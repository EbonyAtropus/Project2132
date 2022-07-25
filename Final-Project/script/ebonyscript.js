const audio = new Audio();
audio.src = "sounds/dicesound.mp3";



const rollDice = document.getElementById("rollbutton");
const randomNumber = Math.floor(Math.random() * 6) + 1;
const diceImage = "images/Dice-" + randomNumber + ".png";

let diceImageChange;
let currentDiceRoll = 1;

const maxDiceRoll = 3;

rollDice.addEventListener("click", function(){

    return randomNumber;

    

    

});
    
    

var you = document.getElementById("youScore");
var demon = document.getElementById("demonScore");