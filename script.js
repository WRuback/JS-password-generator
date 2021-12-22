// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}


function generatePassword(){
  var passwordCharacters="";
  var passwordLength=0;
  var correct = false;

  while (correct === false){
    passwordLength = parseInt(prompt("How long do you want you password? (8 to 128)"));
    if(passwordLength >= 8 && passwordLength <= 128){
      correct = true;
    }
    else{
      alert("Please enter a number between 8 and 128.");
    }
  }

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var passwordCharacters = "";
  var output = "";
  correct = false;

  while (correct === false){
    if (confirm("Would you like to add Uppercase characters?")){
      passwordCharacters += uppercase;
    }
    if (confirm("Would you like to add Lowercase characters?")){
      passwordCharacters += lowercase;
    }
    if (confirm("Would you like to add Numbers?")){
      passwordCharacters += numbers;
    }
    if (confirm("Would you like to add special characters?")){
      passwordCharacters += special;
    }
    if(passwordCharacters !== ""){
      correct = true;
    }
    else{
      alert("Please select at least one kind of character to be in the password.")
    }
  }

  for (let i=0; i<passwordLength; i++) {
    let randLetter = Math.floor(Math.random() * passwordCharacters.length);
    output += passwordCharacters[randLetter];
  }
  return output;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
