// Assignment Code
var generateBtn = document.querySelector("#generate");
// FIGURE OUT HOW TO MAKE IT SHOW THE SELECTED CHARACTERS
// Write password to the #password input
function writePassword() {
  var length = prompt("Please enter the number of characters you would like. (Between 8-128)"); 
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please choose a number between 8 and 128").toUpperCase();
    return;
  }
  var characterType = prompt(`Please type "C" to add Capitalized letters "S" to add Symols "N" to add Numbers SPACE to generate lowercase only`).toUpperCase();
  if (!/^[CSN ]+$/.test(characterType)) {
    alert("Please use C S and/or N.");
    return;
  }
  var password = generatePassword(length, characterType);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

  function generatePassword(length, characterType) {
    const chars = {
      num:"0123456789",
      low:"abcdefghijklmnopqrstuvwxyz",
      sym:"!@#$%^&*()",
      cap:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    };

    var selectedChars = "";
    if (characterType.includes("N")) {
      selectedChars += chars.num + chars.low;
    }
    if (characterType.includes("C")) {
      selectedChars += chars.cap + chars.low;
    }
    if (characterType.includes("S")) {
      selectedChars += chars.sym + chars.low;
    }
    if (characterType.includes(" ")) {
      selectedChars += chars.low;
    }
    if (characterType.includes("N") && characterType.includes("C") && characterType.includes("S")){
      selectedChars += chars.num
       + chars.cap
       + chars.sym
       + chars.low;
    }
    if (characterType.includes("N") && characterType.includes("C") ){
      selectedChars += chars.num
       + chars.cap
       + chars.low;
    }
    if (characterType.includes("N") &&  characterType.includes("S")){
      selectedChars += chars.num
       + chars.sym
       + chars.low;
    }
    if (characterType.includes("C") && characterType.includes("S")){
      selectedChars += chars.cap
       + chars.sym
       + chars.low;
    }

    var password = "";
    console.log(password);
    while (!matchCheck(password, characterType)) {
      password = "";
    for (let i = 0; i < length; i++) {
      var char = selectedChars.charAt(Math.floor(Math.random() * selectedChars.length));
      password += char;
    }
    }
    return password;
    }

    function matchCheck(password, characterType) {
      if (characterType.includes("N") && !password.match(/[0-9]/)) {
        return false;
      }
      if (characterType.includes("C") && !password.match(/[A-Z]/)) {
        return false;
      }
      if (characterType.includes("S") && !password.match(/[!@#$%^&*()]/)) {
        return false;
      }
      return true;
    }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);