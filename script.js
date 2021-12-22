// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}


function generatePassword(){
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "1234567890";
  let special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  
  let passwordLength=0;
  let passwordCharacters="";
  let gaps = ["●"];

  while (true){
    passwordLength = parseInt(prompt("How long do you want you password? (8 to 128)"));
    if(passwordLength >= 8 && passwordLength <= 128){
      break;
    }
    else{
      alert("Please enter a number between 8 and 128.");
    }
  }
  
  for (let i=0; i<passwordLength-1; i++) {
    gaps.push("●");
  }
  let placement = [];
  while (true){
    if (confirm("Would you like to add Uppercase characters?")){
      passwordCharacters += uppercase;
      while(true){
        let random = Math.floor(Math.random() * passwordLength);
        if (placement === [] || !placement.includes(random)){
          gaps[random] = uppercase[Math.floor(Math.random() * uppercase.length)];
          placement.push(random);
          break;
        }
      }
    }
    console.log(placement);
    console.log(gaps);
    if (confirm("Would you like to add Lowercase characters?")){
      passwordCharacters += lowercase;
      while(true){
        let random = Math.floor(Math.random() * passwordLength);
        if (placement === [] || !placement.includes(random)){
          gaps[random] = lowercase[Math.floor(Math.random() * lowercase.length)];
          placement.push(random);
          break;
        }
      }
    }
    console.log(placement);
    console.log(gaps);
    if (confirm("Would you like to add numbers?")){
      passwordCharacters += numbers;
      while(true){
        let random = Math.floor(Math.random() * passwordLength);
        if (placement === [] || !placement.includes(random)){
          gaps[random] = numbers[Math.floor(Math.random() * numbers.length)];
          placement.push(random);
          break;
        }
      }
    }
    console.log(placement);
    console.log(gaps);
    if (confirm("Would you like to add Special characters?")){
      passwordCharacters += special;
      while(true){
        let random = Math.floor(Math.random() * passwordLength);
        if (placement === [] || !placement.includes(random)){
          gaps[random] = special[Math.floor(Math.random() * special.length)];
          placement.push(random);
          break;
        }
      }
    }
    console.log(placement);
    console.log(gaps);
    if(passwordCharacters !== ""){
      break;
    }
    else{
      alert("Please select at least one kind of character to be in the password.")
    }
  }
  console.log(gaps);
  let output = "";
  for (let i=0; i<passwordLength; i++) {
    if(gaps[i] === "●"){
      let randLetter = Math.floor(Math.random() * passwordCharacters.length);
      output += passwordCharacters[randLetter];
    }
    else{
      output += gaps[i];
    }
  }
  return output;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
