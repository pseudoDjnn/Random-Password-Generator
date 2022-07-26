// Assignment code here

/* 
WRITE generatePassword function

return value in function

  a.  Add for loop to iterate generatePassword function
  b.  radomize iteration

Prompt user to enter password criteria

  a.  Password length 8 - 128
  b.  Case senstive, numbers, special characters
  c.  Add window alerts, prompt, and confirm

Validate input made by user to confirm password

Generate password using selected criteria

Display password as alert or written to page
*/

// variables for password and empty container meant to iterate over
let passLen = 8;
let lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

let special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "|"];

let passArray = [];

// generatePassword function
function generatePassword() {
  console.log("Generating password");
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
