// Arrays of all possible characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// TO-DO: 
  function generatePassword(){
  // The following three variable arrays are stored within the function so that the arrays empty each time the function is run. This way, whenever the Generate Password button is clicked, you can generate a completely new password without refreshing the page
  // This is where we'll store all of the possible characters based on user selections
    var characters = []
  // This is where we'll store one randomly generated character of each type the user selects to ensure that at least one character of each selected type appears in the password
  // It's important to store these separately from the password, because when we run our for loop to randomly pick characters from the characters array, we will subtract the number of items in this array so the length is correct. This array will be concatenated into the password first, before other characters are randomly generated.
  // There should be no more than 4 characters in this array at the end of password generation
    var typeSelection = []
  // This is where we'll store the password as it's being generated
    var randomPassword = []
    // Begin the prompt to select password parameters
    var passwordLength = window.prompt("Set your password length (8-128 characters)");
    if (!passwordLength) {
      return;
    } else if (passwordLength < 8 || passwordLength > 128) { //user selects value not between 8 and 128
        window.confirm("Password must be between 8 and 128 characters. Please try again.");
        return;
    } else { //user inputs valid character amount between 8 and 128
       var lowercaseConfirm = window.confirm("Would you like to include lowercase characters in your password?");
    } if (lowercaseConfirm) { // user chooses to include lowercase characters
      // add lowercase array to possible characters
      characters = characters.concat(lowercase);
      // select random character to guarantee at least one included in password
      var indexLowercase = Math.floor(Math.random() * lowercase.length);
      var lowercase1 = lowercase[indexLowercase];
      console.log(lowercase1);
      // append this choice to the typeSelection array
      typeSelection.push(lowercase1);
      var uppercaseConfirm = window.confirm("Would you like to include uppercase characters in your password?");
      } else { // user chooses not to incluce lowercase characters
        var uppercaseConfirm = window.confirm("Would you like to include uppercase characters in your password?");
      } if (uppercaseConfirm) { // user chooses to include uppercase characters
        // add uppercase array to possible characters
        characters = characters.concat(uppercase);
        // select random character to guarantee at least one included in password
        var indexUppercase = Math.floor(Math.random() * uppercase.length);
        var uppercase1 = uppercase[indexUppercase];
        console.log(uppercase1);
        // append this choice to the typeSelection array
        typeSelection.push(uppercase1);
        var numericConfirm = window.confirm("Would you like to include numeric characters in your password?");
        } else { // user chooses not to include uppercase characters
          var numericConfirm = window.confirm("Would you like to include numeric characters in your password?");
        } if (numericConfirm) { // user chooses to include numeric characters
          // add numeric array to possible characters
          characters = characters.concat(numeric);
          // select random character to guarantee at least one included in password
          var indexNumeric = Math.floor(Math.random() * numeric.length);
          var numeric1 = numeric[indexNumeric];
          console.log(numeric1);
          // append this choice to the typeSelection array
          typeSelection.push(numeric1)
          var specialConfirm = window.confirm("Would you like to include special characters in your password?");
          } else { // user chooses not to include numeric characters
            var specialConfirm = window.confirm("Would you like to include special characters in your password?");
          } if (specialConfirm) { // user chooses to include special characters
            // add special array to possible characters
            characters = characters.concat(special);
            // select random character to guarantee at least one included in password
            var indexSpecial = Math.floor(Math.random() * special.length);
            var special1 = special[indexSpecial];
            console.log(special1);
            // append this choice to the typeSelection array
            typeSelection.push(special1);
            console.log(typeSelection);
            console.log(characters);
            var generateConfirm = window.confirm("Generate password?");
            } else {
              var generateConfirm = window.confirm("Generate password?");
            } 
            // generate the password
            if (generateConfirm) {
            // Put pre-selected characters in randomPassword array
            randomPassword = randomPassword.concat(typeSelection);
            // Store randomly selected values in randomPassword array with for loop
            // Subtract typeSelection array length from passwordLength to ensure final password is the length the user specified
            for (var i = 0; i < (passwordLength - typeSelection.length); i++) {
                var randomCharacterIndex = Math.floor(Math.random() * characters.length);
                var randomCharacterSelection = characters[randomCharacterIndex];
                randomPassword.push(randomCharacterSelection)
              }
              } else {
                return;
              // Return those values to the password to be written by the writePassword function
              // .join ensures that the password array will be printed without commas separating each character
              }  return randomPassword.join("");
            }
            
             
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);