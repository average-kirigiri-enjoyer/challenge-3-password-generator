/*
ethan (average-kirigiri-enjoyer)
SCS Boot Camp Module 3 Weekly Challenge - Password Generator
Created 2023/07/22
Last Edited 2023/07/23   
*/

// Assignment code here

function generatePassword();
{
  passLength = prompt("Please enter desired password length (between & including 8-128)", "Password Length");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate-password-button");

// Write password to the #password input
function writePassword()
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
