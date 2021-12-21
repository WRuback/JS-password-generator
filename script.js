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

  passwordCharacters += ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
  var output = "";
  for (let i=0; i<passwordLength; i++) {
    let randLetter = Math.floor(Math.random() * passwordCharacters.length);
    output += passwordCharacters[randLetter];
  }
  return output;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
