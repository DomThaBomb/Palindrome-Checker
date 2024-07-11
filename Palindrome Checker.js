// set up prompt to enter in a palindrome

const string = prompt("Enter a word that can be spelt forward and backwards");
checkPalindrome(string);

reverse() // This is used to initialize the palindrome
split()


// Function for whether if it is a palindrome or not

function checkPalindrome(string){
    const splitString = string.split('');
    console.log(splitString);

    const reversedString = splitString.join('');
    console.log(reversedString);

    const finalString = reversedString.join('');
    console.log(finalString);

    if(string == finalString){
        console.log("It is a palindrome");
    }
    else{
        console.log("It is not a palindrome")
    }
}
