let userNum = parseInt(prompt("Inserisci un numero da 1 a 5"));
const userChoice = prompt("Scegli pari o dispari:");
const pcNum = generatePcNum(1, 5);


console.log(pcNum);


if (userNum < 1 || userNum > 5){
    alert( "il numero non e' nei parametri stabiliti" )
    userNum = parseInt(prompt("Inserisci un altro numero compreso tra 1 e 5"));
}

console.log(userNum);

function generatePcNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function numSum (userNum, pcNum){
    
    sum = userNum + pcNum;

    if (sum % 2 === 0 ){
        return "pari";
    } else {
        return "dispari";
    }
}

console.log(numSum());

if (userChoice === numSum()){
    alert("hai vinto bello mio")
} else {
    alert("hai perso, sei na pippa")
}

