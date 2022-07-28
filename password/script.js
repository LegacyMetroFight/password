// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowercaseChars = "qwertyuiopasdfghjklzxcvbnm"
var numsChars = "123567890"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //the length is equal to whatever I typed as a response to the question how long pw
  var lengthPw = prompt("How long pw?");
  var includeLowercase = confirm("Do you want to include lowercase?");
  var includeNumbers = confirm("Do you want to include numbers?");

  var possibleChars = "";

  if(includeLowercase) {
    possibleChars = possibleChars + lowercaseChars
  }

  if(includeNumbers) {
    possibleChars = possibleChars + numsChars
  }

  console.log(possibleChars)
  var finalPw = ""
  for(i=0; i<lengthPw; i++) {
    var randomNum = Math.floor(Math.random() * possibleChars.length)
    var randomChar = possibleChars[randomNum]
    finalPw = finalPw + randomChar
  }

  return finalPw
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
