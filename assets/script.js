/*
ethan (average-kirigiri-enjoyer)
SCS Boot Camp Module 3 Weekly Challenge - Password Generator
Created 2023/07/22
Last Edited 2023/07/23   
*/

// Assignment code here

function generatePassword()
{
  var userLengthInput= prompt("Please enter desired password length (between & including 8-128, non-integers will be rounded down)", "Password Length");
  
  if (isNaN(parseInt(userLengthInput)))
  {
    alert("Please input a number")
    return;
  }

  var passLength = parseInt(userLengthInput);
  
  if (passLength < 8 || passLength > 128)
  {
    alert("Password length is outside acceptable bounds, please try again");
    return;
  }

  var includeLowerCase = confirm("Include lower case characters in password?");
  var includeUpperCase = confirm("Include upper case characters in password?");
  var includeNumbers = confirm("Include numbers in password?");
  var includeSpecial = confirm("Include special characters in password?");

  if (includeLowerCase || includeUpperCase || includeNumbers || includeSpecial)
  {
    alert("password generated test");
  }

  alert("Must include at least one character type, please try again");
  return;
}

// Write password to the #password input
function writePassword()
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Get references to the #generate-password-button element
var generatePassBtn = document.getElementById("generate-password-button");

// Add event listener to generate button
generatePassBtn.addEventListener("click", generatePassword);
