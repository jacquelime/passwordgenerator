// Establish window.prompt for how many characters user would like their password to be X
// Validate password length inputted is between 8 and 128 characters X
// Establish window.confirm for each possible password attribute 
// If statements asssociated with each window prompt
// create a variable containing array of special characters
// create a cariable containing array of numbers 1-9
// create a variable containing array of lowercase characters
// create a varaiable containing array of uppercase characters



// ------------------ Global Variables ----------------------------



var confirmUppercase = true;
var confirmLowercase = true;
var confirmSpecial = true;




// array of special characters
var specialCharacters = ["(", ")", "*", ":", "?", "$", "@", "/", "&", "{", "}", "!", "%", "~", "-", "_", "[", "]", "^"];
// array of numbers 0-12
var numericalCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
// array of lowercase letters
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// array of uppercase letters
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// ------------------- Functions ----------------------------------
function generatePassword() {
  var userRequest = window.prompt("How many characters would you like your password to be? Please input a number between 8 and 128.");
  if (isNaN(userRequest) || userRequest > 128 || userRequest < 8) {
    window.alert("Please input a valid number.")
  } else {
    var confirmSpecial = window.confirm("Would you like your password to contain special characters?");
    var confirmLowercase = window.confirm("Would you like your password to contain lowercase characters?");
    var confirmUppercase = window.confirm("Would you like your password to contain uppercase characters?");
    var confirmNumerical = window.confirm("Would you like your password to contain numbers?");
  }
if (confirmSpecial && confirmLowercase && confirmUppercase && confirmNumerical) {
  var userRequest = specialCharacters.concat(lowercaseLetters, uppercaseLetters, numericalCharacters);
  console.log (userRequest);
   
}

  else if (confirmSpecial && confirmLowercase) {
    var userRequest = specialCharacters.concat(lowercaseLetters);
  }

  else if (confirmSpecial && confirmLowercase && confirmUppercase) {
    var userRequest = specialCharacters.concat(lowercaseLetters + uppercaseLetters);
  }

  else if (confirmSpecial && confirmNumerical) {
    var userRequest = specialCharacters.concat(numericalCharacters);
}


  else if (!confirmSpecial && !confirmLowercase && !confirmUppercase && !confirmNumerical) {
    var userRequest = alert("You have to choose something.");
  }

  else if (confirmLowercase && confirmUppercase) {
    var userRequest = lowercaseLetters.concat(uppercaseLetters);
  }

  else if (confirm)

  if (confirmUppercase === true) {
    var userRequest = uppercaseLetters;
  }

  if (confirmSpecial === true)

  var finalPassword = []


  for (var i = 0; i < userRequest; i++) {
    var mathPassword = userRequest [Math.floor(Math.random() * userRequest.length)];
    finalPassword.push(mathPassword)
}
console.log(finalPassword + "this is a string");
return finalPassword;


}





  








// --------------- Main Processes/Event Listeners -----------------
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

