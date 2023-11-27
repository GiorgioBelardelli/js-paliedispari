const userWord = prompt("Scrivi una parola");


function checkPalindrome(userWord) {

    const len = userWord.length;

    for (let i = 0; i < len / 2; i++) {

        if (userWord[i] !== userWord[len - 1 - i]) {
            return "la parola non e' palindroma";
        }
    }
    return "La parola e' palindroma";
}

const check = checkPalindrome(userWord);

console.log(check);