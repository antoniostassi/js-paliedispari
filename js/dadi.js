
let userPari = true;

let userInput = parseInt(prompt("Scegli un numero da 1 a 5"));
const computerInput = parseInt(getRandomArbitrary(1,5));
// console.log(userInput, typeof(userInput));

while (userInput > 5 || userInput < 1 || isNaN(userInput)) {
    userInput = parseInt(prompt("Hai inserito un valore non valido! - Scegli un numero da 1 a 5"));
}

function getRandomArbitrary(min, max) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.random() * (max - min) + min;
}

function winOrLose(userNum, aiNum) {
    let sum = userNum + aiNum;
    if(userPari && (sum % 2 == 0)) {
        alert("Hai scelto Pari.");
        alert(userNum + " | " + aiNum + " Risultato = " + sum + " | Hai vinto.");
    } else if(!userPari && (sum % 2 != 0)) {
        alert("Hai scelto Dispari.\n--");
        alert(userNum + " | " + aiNum + " Risultato = " + sum + " | Hai vinto.");
    } else {
        alert(userNum + " | " + aiNum + " Risultato = " + sum + " | Hai perso.");
    }

}

winOrLose(userInput, computerInput);