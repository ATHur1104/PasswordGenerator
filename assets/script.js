// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = prompt("Please enter the number of characters you would like. (Between 8-128)"); 
  if (length < 8 || length > 128) {
    alert("Please choose a number between 8 and 128");
    return;
  }
  var characterType = prompt(`Please type with spaces "C" to add Capitalized letters "S" to add Symols "N" to add Numbers`);
  if (!/^[CSN ]+$/.test(characterType)) {
    alert("Please use C S and/or N, Please remove spaces");
    return;
  }
  var password = generatePassword(length, characterType);
  var passwordText = document.querySelector("#password");

  function generatePassword(length, characterType) {
    const chars = {
      num:"0123456789",
      low:"abcdefghijklmnopqrstuvwxyz",
      sym:"!@#$%^&*()",
      cap:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    };
    var password = "";
    var selectedChars = "";
    if (characterType.includes("N")) {
      selectedChars += chars.num + chars.low;
    }
    if (characterType.includes("C")) {
      selectedChars += chars.cap;
      selectedChars += chars.low;
    }
    if (characterType.includes("S")) {
      selectedChars += chars.sym;
      selectedChars += chars.low;
    }
    if (characterType.includes("")) {
      selectedChars += chars.low;
    }
    if (characterType.includes("N") && characterType.includes("C") && characterType.includes("S")){
      selectedChars += chars.num;
      selectedChars += chars.cap;
      selectedChars += chars.sym;
      selectedChars += chars.low;
    }

    for (let i = 0; i < length; i++) {
      var rand = Math.floor(Math.random() * selectedChars.length);
      password += selectedChars.charAt(rand);
    }
  return password;
}
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



















// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
