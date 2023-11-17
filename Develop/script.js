// Assignment Code
let generateBtn = document.querySelector("#generate");
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
let specialCharacter = ' !#$%&()*+,-./:;<=>?@[\]^_`{|}~';
let passNumber = '0123456789';

// randomPassword = all above values
// Generate password functionality

function userChoice(){
  var choice = confirm("Click OK to include an upper case letter.")
  
  if (choice === true){
    writePassword += upperCase[randomIndex];
  }

// if user picks all false options, return statement that they have to choose something
}

function generatePassword() {  
  // if else statements within here
  var randomIndex = Math.floor(Math.random() * randomPassword.length)
  userChoice();
  // console.log(choice)
// return "password1"

}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
// console.log(passwordText)
  passwordText.value = password;

// console.log(passwordText.value)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


