// Below creates the global variables needed for this code.
var generateBtn = document.querySelector("#generate");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let passNumber = "0123456789";
let specialCharacter = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

// Below code creates the function to be called and placed into the html after the user clicks the "Generate Password" button
function writePassword() {
  var possiblePassword = "";

  // Below code prompts the user to decide how many characters to make the password and runs a loop to re-run the above functions
  // randomly until the selected number of characters is reached.
  function TotalCharacters() {
    let totalCharacters = window.prompt("How many characters would you like the password to have? (Choose between 8 and 128)");
    return totalCharacters;
  }

  let totalCharactersChosen = TotalCharacters();

  // Below code asks the user if they want an upperCase letter in the password, if so it adds the entire global upperCase variable
  // into a string called possiblePassword
  var RandomUpperCase = function () {
    let randomUpperCase = window.confirm(
      "Would you like the password to have an upper case letter?"
    );
    if (randomUpperCase === true) {
      possiblePassword += upperCase;
    } else {
      return "";
    }
  };

  RandomUpperCase();

  // Below code asks the user if they want a lowerCase letter in the password, if so it adds the entire global lowerCase variable
  // into a string called possiblePassword
  function RandomLowerCase() {
    let randomLowerCase = window.confirm("Would you like the password to have a lower case letter?");
    if (randomLowerCase === true) {
      possiblePassword += lowerCase;
    } else {
      return "";
    }
  }

  RandomLowerCase();

  // Below code asks the user if they want a number in the password, if so it adds the entire global passNumber variable
  // into a string called possiblePassword
  function RandomNumber() {
    let randomNumber = window.confirm("Would you like the password to have a number?");
    if (randomNumber === true) {
      possiblePassword += passNumber;
    } else {
      return "";
    }
  }

  RandomNumber();


  // Below code asks the user if they want a special character in the password, if so it adds the entire global specialCharacter variable
  // into a string called possiblePassword
  function RandomSpecChar() {
    let randomSpecChar = window.confirm("Would you like the password to have a special character (like ! @ #)?");
    if (randomSpecChar === true) {
      possiblePassword += specialCharacter;
    } else {
      return "";
    }
  }
  RandomSpecChar();

  var password = "";
  for (let i = 0; i < totalCharactersChosen; i++) {
    password += possiblePassword.charAt(Math.floor(Math.random() * possiblePassword.length));
  }

  let generatedPasswordText = document.querySelector("#password");

  generatedPasswordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);