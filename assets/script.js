// Assignment code here
var specialCharacter;
var upperCase;
var lowerCase;
var person;
var number;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Creating a function & making sure it follows the instruction of the first prompt
function generatePassword() {
  let passwordLength = prompt(
    "Choose a password legnth thats at least 8 letter and max 128"
  );
  // If statement stating that user must chose a number >= 8 <=128
  if (passwordLength >= 8 && passwordLength <= 128) {
    // Logging the password length and adding string
    console.log(passwordLength + " pass length");
    // Creating a variable that will hold the random password the random generator would create
    var randomPassword = "";
    // Creating a variable that will hold the possible strings the random generator would choose from
    var possible = "";
    // A confirm if the user would want to have a lower case in the password
    let lowerCase = confirm(
      "Select ok if you would like to include a lower case? "
    );
    // A confirm if the user would want to have a upper case in the password
    let upperCase = confirm(
      "Select ok if you would like to include a  upper case"
    );
    // A confirm if the user would want to have a special character in the password
    let specialCharacter = confirm(
      "Select ok if you would like to include specail characters? "
    );
    // A confirm if the user would want to have a number in the password
    let number = confirm(
      "Select ok if you would like to use numbers in your password "
    );
    // Making sure that the user must at least select a character type
    if (lowerCase || upperCase || specialCharacter || number) {
      console.log("At least one chracter type is selected");
      // If the user selects lower case, random generator would use this information to generate the password
      if (lowerCase === true) {
        console.log("Lower case");
        possible += "abcdefghijklmnopqrstuvwxyz";
      }
      // If the user didnt select, user will see the following string in the console
      else {
        console.log("Lower case not selected");
      }
      //If the user selects upper case, random generator would use this information to generate the password from
      if (upperCase === true) {
        console.log("Upper case selected");
        possible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      // If the user didnt select, user will see the following string in the console
      else {
        console.log("Upper case not selected");
      }
      // If the user selects special character, random generator would use this information to generate the password from
      if (specialCharacter === true) {
        console.log("Special character selected");
        possible += "!@#$%^&*()_+~`{}|:\"<>?';/.,";
      }
      // If the user didn't select, user will see the following string in the console
      else {
        console.log("Special character not selected");
      }
      //If the user selects number, random generator would use this information to generate the password from
      if (number === true) {
        console.log("Number is selected");
        possible += "1234567890";
      } else {
        console.log("Number not selected");
      }
      //Created a for loop to generate the password from after the user selects his user choice
      for (var i = 0; i < passwordLength; i++) {
        randomPassword += possible.charAt(
          Math.floor(Math.random() * possible.length)
        );
        console.log(randomPassword + "for loop");
      }
    } else {
      alert("You must at least select one character type");
      generatePassword();
    }
  } else {
    alert(" You must chose a number between 8 & 128");
    generatePassword();
  }

  console.log("Possible string " + possible);
  console.log(randomPassword + "return");
  return randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
