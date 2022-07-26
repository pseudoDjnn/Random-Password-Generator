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
