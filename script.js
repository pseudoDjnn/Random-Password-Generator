// Assignment coe here

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

const stringItems = {
  lower: [],
  upper: [
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
  ],
  numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  special: ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "|"],
};

// Randomize generated password based on user input and iteration
function randomizer(min, max) {
  // for (let i = min - 1; i < max; i--) {
  // let value = Math.floor(Math.random() * (max - min) + min);
  if (!max) {
    max = min;
    min = 0;
  }
  const mRand = Math.random();
  return Math.floor(min * (1 - mRand) + mRand * max);

  // return value;
  // }
}
const list = [];

// Getting a random item/value from our array
// function getRandomItem(list) {
//   // debugger;
//   return list[randomizer(list.length)];
// }
// getRandomItem(0);

function getRandomItem(list) {
  // debugger;
  return list[randomizer(list.length)];
}

// generatePassword function
function generatePassword() {
  // console.log("Generating password");

  while (true) {
    var userInput = prompt("How long with the password be?");

    if (userInput === null) {
      return;
    }

    var passwordLength = parseInt(userInput);

    if (isNaN(passwordLength)) {
      alert("Error: Please try again.");
    } else if (passwordLength < 8 || passwordLength > 128) {
      alert(
        "Password must be at least 128  characters long with a minimum length of 8 characters."
      );
    } else {
      break;
    }
  }

  // prompts for questioning the characters in the password
  const confirming = {
    uInputSymb: confirm("Shall we use symbols for your password?"),
    uInputNumb: confirm("Shall we use numbers for your password?"),
    uInputLow: confirm("Shall we use lower case letters for your password?"),
    uInputUpp: confirm("Shall we use upper case letters for your password?"),
  };

  // function confirming(confirmation) {
  //   const getConfirm = {
  //     uInputSymb: confirm("Shall we use symbols for your password?"),
  //     uInputNumb: confirm("Shall we use numbers for your password?"),
  //     uInputLow: confirm("Shall we use lower case letters for your password?"),
  //     uInputUpp: confirm("Shall we use upper case letters for your password?"),
  //   };
  //   return confirming[confirmation.toLowerCase()] ?? "Error; Please try again";
  // }

  const collector = [];

  for (let i = 0; i < stringItems.upper.length; i++) {
    stringItems.lower[i] = stringItems.upper[i].toLowerCase();
  }
  if (confirming.uInputSymb === true) {
    collector.push(stringItems.special);
  }
  if (confirming.uInputNumb === true) {
    collector.push(stringItems.numbers);
  }
  if (confirming.uInputLow === true) {
    collector.push(stringItems.lower);
  }
  if (confirming.uInputUpp === true) {
    collector.push(stringItems.upper);
  }

  // console.log(collector);

  if (collector.length === 0) {
    collector.push(uInputLow);
    // collector.push(confirming.uInputLow);
  }

  let passGen = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomValue = getRandomItem(collector);
    let randomChar = getRandomItem(randomValue);
    passGen += randomChar;
    console.log(randomChar);
  }
  // console.log(passGen);

  // password made when user submits prompts
  return passGen;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();

  let passwordText = document.querySelector("#password");

  // Returns web browser text when page is loaded by calling not true
  if (!password) {
    return;
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
