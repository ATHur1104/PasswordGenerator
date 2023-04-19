// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = prompt("Please enter the number of characters you would like."); 
  if (length < 8 || length > 128) {
    alert("Please choose a number between 8 and 128");
    return;
  }
  var characterType = prompt(`Please type with spaces ${break} "C" to add Capitalized letters ${break} "S" to add Symols ${break} "N" to add Numbers`);
  if (characterType != "C" && "S" && "N" && "") {
    alert("Please use spaces");
    return;
  }
  var password = generatePassword(length,);
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
    

    for (let i = 0; i < length; i++) {
      var rand = Math.floor(Math.random() * chars.length);
      password += chars[rand];
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
