//Variables

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1,2,3,4,5,6,7,8,9];
var specialChar = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];
var possibleArr = []

function thePrompts() {
    charLength = parseInt(prompt("How many characters would you like your password to be? Pick a value between 8 and 128."));
    if (isNaN(charLength) || charLength < 8 || charLength > 128) {
        alert("Your password must be between 8 and 128 characters.")
        return false;
    }
    if (confirm("Would you like to use uppercase letters?")) {
        possibleArr = possibleArr.concat(upperCase);
    }
    if (confirm("Would you like to use lowercase letters?")) {
        possibleArr = possibleArr.concat(lowerCase);
    }
    if (confirm("Would you like to use numbers?")) {
        possibleArr = possibleArr.concat(numbers);
    }
    if (confirm("Would you like to use special characters?")) {
        possibleArr = possibleArr.concat(specialChar);
    }
    return true;
}

function generatePassword() {
    thePrompts();
    var password = "";
    for (let i = 0; i < charLength; i++) {
        var randomize = (Math.floor(Math.random() * possibleArr.length));
        password += possibleArr[randomize];
    }
    return password;
}


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  password = generatePassword();
  passwordText.value = password;
};

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);