// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  // These are the groups of characters that can be added to the password.
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "1234567890";
  let special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // These are all the variables needed to run the program.
  let passwordLength = 0; // Will record how long they want the password.
  let passwordCharacters = ""; // Will contain all characters that could be added to the password.
  let gaps = ["●", "●", "●", "●", "●", "●", "●", "●"]; //Will contain and show all the pre-filled characters for the password.
  let output = ""; // Will contain the final generated password.

  // This function checks if the user want the character group in the password, 
  // then guarantees thru the placement file that one of thoses character will 
  // be in the password.
  function checkAddCharacters(characterName, characters) {
    if (confirm("Would you like to add " + characterName + "?")) { // Asks if they want this character.
      passwordCharacters += characters; // Add character to the pool if yes.
      while (true) { //Loops until pre-fill character is added.
        let random = Math.floor(Math.random() * passwordLength); // Picks a spot in the password.
        if (gaps[random] === "●") { // Checks if something has been placed there before.
          gaps[random] = characters[Math.floor(Math.random() * characters.length)]; // If not, add random character from character group.
          console.log(gaps);
          break; // ends the loop after gap spot is pre-filled.
        }
        else { // If that spot was filled, the segment re-runs, picking a new spot until it is open.
          console.log(random + " Is already in placement! getting new number...");
        }
      }
    }
  }

  // This segment asks for the password length, and loops until it gets a useable answer.
  while (true) {
    passwordLength = parseInt(prompt("How long do you want you password? (8 to 128)"));
    if (passwordLength >= 8 && passwordLength <= 128) {
      break;
    }
    else {
      alert("Please enter a number between 8 and 128.");
    }
  }

  // This segment adds all the necessary circles to the gaps file to make it make the password length.
  // There is a minus 8 because the gaps variable already has the first 8 included.
  for (let i = 0; i < passwordLength - 8; i++) {
    gaps.push("●");
  }

  // This checks what character groups the user wants. If they select none, it loops until they do.
  while (true) {
    checkAddCharacters("Uppercase characters", uppercase);
    checkAddCharacters("Lowercase characters", lowercase);
    checkAddCharacters("Numbers", numbers);
    checkAddCharacters("Special characters", special);
    if (passwordCharacters !== "") {
      break;
    }
    else {
      alert("Please select at least one kind of character to be in the password.")
    }
  }

  // This builds the password.
  for (let i = 0; i < passwordLength; i++) {
    if (gaps[i] === "●") { // Checks if this letter was pre-filled.
      output += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]; // if not, generate a random character from the combined selected groups. 
    }
    else {
      output += gaps[i]; // if so, add the pre-fill character to that spot.
    }
  }
  return output; // return the generated password.
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
