let lower = [];
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

// Randomize generated password based on user input and iteration
function randomizer(min, max) {
  // for (let i = min - 1; i < max; i--) {
  // let value = Math.floor(Math.random() * (max - min) + min);
  if (!max) {
    max = min;
    min = 0;
  }
  let mRand = Math.random();
  return Math.floor(min * (1 - mRand) + mRand * max);

  // return value;
  // }
}

// Getting a random item/value from our array
function getRandomItem(list) {
  return list[randomizer(list.length)];
}

// generatePassword function
function generatePassword() {
  let userInput = prompt("How long with the password be?");

  let passwordLength = parseInt(userInput);

  // console.log("Generating password");
  let uInputSymb = confirm("Shall we use symbols for your password?");
  let uInputNumb = confirm("Shall we use numbers for your password?");
  let uInputLow = confirm("Shall we use lower case letters for your password?");
  let uInputUpp = confirm("Shall we use upper case letters for your password?");

  if (isNaN(passwordLength)) {
    alert("Error: Please try again.");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert(
      "Password must be at least 128 characters long with a minimum length of 8 characters."
    );
    return;
  }

  let collector = [];

  for (let i = 0; i < upper.length; i++) {
    lower[i] = upper[i].toLowerCase();
  }
  if (uInputSymb === true) {
    collector.push(special);
  }
  if (uInputNumb === true) {
    collector.push(numbers);
  }
  if (uInputLow === true) {
    collector.push(lower);
  }
  if (uInputUpp === true) {
    collector.push(upper);
  }

  // console.log(collector);

  let passGen = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomValue = getRandomItem(collector);
    let randomChar = getRandomItem(randomValue);
    passGen += randomChar;
    // console.log(randomChar);
  }
  console.log(passGen);
  // password made when user submits prompts
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
