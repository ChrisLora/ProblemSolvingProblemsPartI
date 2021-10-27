"use strict"
// #1 Fizz Buzz
for (let i = 0; i < 101; i++){
    if (!(i%3)) {
        console.log("Fizz")
    }
    if (!(i%5)) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

// #2 Reverse a String
let reversedWord = ""
function reverseWord(word){  
    for (let i = word.length - 1; i >= 0; i--){
        reversedWord += word[i];
    }
    console.log(reversedWord);
}
reverseWord(prompt("Enter the word you'd like reversed.",""));

// #3 Capitalize Letter


// #4 Compress a String of Characters


// #5 Palindrome
