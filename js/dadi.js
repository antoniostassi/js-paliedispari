

let gameQuestion = prompt("Cosa scegli? Pari o Dispari?");

if (gameQuestion.toLowerCase() == "pari") {
    console.log(gameQuestion.toLowerCase());
}

while (gameQuestion.toLowerCase() != "pari" || gameQuestion.toLowerCase() != "dispari") {
    if (gameQuestion.toLowerCase() == "pari"){
        break;
    }
    else if (gameQuestion.toLowerCase() == "dispari"){
        break;
    }
    else {
        gameQuestion = prompt("Hai inserito un valore non valido. Rispondi: pari oppure dispari");
    }
}

let userPari = false; 

if (gameQuestion.toLowerCase() == "pari") {
    userPari = true;
    alert("Hai scelto Pari.");
} else {
    userPari = false;
    alert("Hai scelto Dispari.");
}

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
        alert(userNum + " | " + aiNum + " Risultato = " + sum + " | Hai vinto.");
    } else if(!userPari && (sum % 2 != 0)) {
        alert(userNum + " | " + aiNum + " Risultato = " + sum + " | Hai vinto.");
    } else {
        alert(userNum + " | " + aiNum + " Risultato = " + sum + " | Hai perso.");
    }

}

winOrLose(userInput, computerInput);