
const inputParola = prompt("Scrivi una parola e ti dirò se è palindroma");
// const inputParola = "bab";


function verifyPalyndrome(word) {

    let notify = "La parola "+ word +" è palindroma";
    let k = word.length - 1;
    for(let i = 0; i < word.length; i++){
        
        if (word[i] !== word[k] && k > i ) {
            console.log("Passo da qui dunque "+ word[i] + " è diverso da "+ word[k]);
            console.log("word["+ i +"] = " + word[i], word[k]);
            notify = "La parola "+ word +" non è palindroma";  
        }
        k--;
        
    }
    return notify;
}

let result = verifyPalyndrome(inputParola);
alert(result);