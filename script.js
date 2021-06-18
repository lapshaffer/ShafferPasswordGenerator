// Arrays of all possible characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"]
// This is where we'll store all of the possible characters based on user selections
var characters = []

// Assignment Code
var generateBtn = document.querySelector("#generate");

// TO-DO: 
// Code a way to include/leave out character types depending on user selection
  // Append arrays into characters array upon user selection?
// Code second half of function to generate the password based on user inputs
  // Math.floor and Math.random()* characters.length to generate random number within characters array
  // var characterChoice = character[index] stores that choice?
  // and then run in a for loop for passwordLength number of times? and append each random choice to the end of the     password?
  function generatePassword(){
    var passwordLength = window.prompt("Set your password length (8-128 characters)");
    if (!passwordLength) {
      return;
    } else if (passwordLength < 8 || passwordLength > 128) { //user selects value not between 8 and 128
        window.confirm("Please choose a length between 8 and 128 characters")
        return;
    } else { //user inputs valid character amount between 8 and 128
       var lowercaseConfirm = window.confirm("Would you like to include lowercase characters in your password?")
    } if (lowercaseConfirm) { // user chooses to include lowercase characters
      // add lowercase array to possible characters
      var uppercaseConfirm = window.confirm("Would you like to include uppercase characters in your password?")
      } else { // user chooses not to incluce lowercase characters
        var uppercaseConfirm = window.confirm("Would you like to include uppercase characters in your password?")
      } if (uppercaseConfirm) { // user chooses to include uppercase characters
        // add uppercase array to possible characters
        var numericConfirm = window.confirm("Would you like to include numeric characters in your password?")
        } else { // user chooses not to include uppercase characters
          var numericConfirm = window.confirm("Would you like to include numeric characters in your password?")
        } if (numericConfirm) { // user chooses to include numeric characters
          // add numeric array to possible characters
          var specialConfirm = window.confirm("Would you like to include special characters in your password?")
          } else { // user chooses not to include numeric characters
            var specialConfirm = window.confirm("Would you like to include special characters in your password?")
          } if (specialConfirm) { // user chooses to include special characters
            // add special array to possible characters
            var generateConfirm = window.confirm("Generate password")
            } else {
              var generateConfirm = window.confirm("Generate password")
            } if (generateConfirm) {
            // generate the password
            } else {
              return;
            }
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);