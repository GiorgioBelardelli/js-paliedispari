const userWord = document.getElementById("input-word");
const checkButton = document.getElementById("submit-button");
let wordToCheck;





// const check = checkPalindrome();
// document.getElementById("result").innerHTML = check;

checkButton.addEventListener("click", 

    function(){

        wordToCheck = userWord.value; 

        checkPalindrome();
        const check = checkPalindrome();
        document.getElementById("result").innerHTML = check;
    }

        
)


function checkPalindrome(wordToCheck) {

    const len = wordToCheck.length;

    for (let i = 0; i < len / 2; i++) {

        if (wordToCheck[i] !== wordToCheck[len - 1 - i]) {
            return "la parola non e' palindroma";
        }
    }
    return "La parola e' palindroma";
}