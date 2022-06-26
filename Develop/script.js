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

function generatePassword() {
  let passwordLength = prompt("Choose a password legnth thats at least 8 letter and max 128");

  if (passwordLength >= 8 && passwordLength <= 128){
    console.log(passwordLength +  " passlength")
    var randomPassword = "";
    var possible = "";
    let lowerCase = confirm("Select ok if you would like to include a lower case? ");
    let upperCase = confirm("Select ok if you would like to include a  upper case");
    let specialCharacter = confirm("Select ok if you would like to include specail characters? ");
    let number = confirm("Select ok if you would like to use numbers in your password ");
    
    if(lowerCase || upperCase || specialCharacter || number){
      console.log("At least one chracter type is selected")
      if(lowerCase === true) {
      console.log("Lower case")
      possible += "abcdefghijklmnopqrstuvwxyz"
      }else {
      console.log("Lower case not selected")
      }
      if(upperCase === true){
      console.log("Upper case selected")
      possible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      }else {
      console.log("Upper case not selected")
      }
      if(specialCharacter === true){
      console.log("Special character selected")
      possible += "!@#$%^&*()_+~`{}|:\"<>?';/.,"
      } else {
      console.log("Special character not selected")
      }
      if(number === true){
      console.log("Number is selected")
      possible += "1234567890"
      } else {
      console.log("Number not selected")
      }
    for (var i = 0; i < passwordLength; i++){
        randomPassword += possible.charAt(Math.floor(Math.random() * possible.length));
        console.log(randomPassword + "for loop")
      
      } 
    } else {
      alert("You must at least select one character type")
      generatePassword()
    }
    } else {
      alert(" You must chose a number between 8 & 128");
      generatePassword()
      // passwordLength = prompt("Choose a password legnth thats at least 8 letter and max 128");
    }

 console.log("Possible string " + possible)
 
  console.log(randomPassword + "return")
  return randomPassword;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
