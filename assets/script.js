/*
ethan (average-kirigiri-enjoyer)
SCS Boot Camp Module 3 Weekly Challenge - Password Generator
Created 2023/07/22
Last Edited 2023/07/23   
*/

//main function to generate password
function generatePassword()
{
  //prompts user to input desired password length
  var userLengthInput= prompt("Please enter desired password length between & including 8-128 (non-integers will be rounded down)", "Password Length");
  
  //if the user did not input a number, exits function and tells user to try again
  if (isNaN(parseInt(userLengthInput)))
  {
    alert("Please input a number")
    return;
  }

  //converts user input to an integer, and checks that it falls within the acceptable range
  var passLength = parseInt(userLengthInput);
  
  if (passLength < 8 || passLength > 128)
  {
    alert("Password length is outside acceptable bounds, please try again");
    return;
  }

  //prompts user to confirm which character types they want to include in their password
  var includeLowerCase = confirm("Include lower case characters in password?");
  var includeUpperCase = confirm("Include upper case characters in password?");
  var includeNumbers = confirm("Include numbers in password?");
  var includeSpecial = confirm("Include special characters in password?");

  //lowercase, uppercase, numbers, and special characters are added to array based on above user input
  var passwordCharacterPool = [];

  if (includeLowerCase)
  {
    passwordCharacterPool = passwordCharacterPool.concat(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
  }
  if (includeUpperCase)
  {
    passwordCharacterPool = passwordCharacterPool.concat(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
  }
  if (includeNumbers)
  {
    passwordCharacterPool = passwordCharacterPool.concat(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  }
  if (includeSpecial)
  {
    passwordCharacterPool = passwordCharacterPool.concat(["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ";", ":", "[", "{", "]", "}", "'", ",", "<", ".", ">", "/", "?",]);
  }

  //if user declined to include all four character types, exits function and tells user to try again
  if (!passwordCharacterPool.length)
  {
    alert("Must include at least one character type, please try again");
    return;
  }

  console.log(passwordCharacterPool);

  //for loop generates a random number, uses it to pick out an item from the above array, and adds it to password
  //for loop iterates for the length of the password that the user inputted

  //password is written to the page where it previously states "your secure password"
}

//
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
