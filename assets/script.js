// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = prompt("Please enter the number of characters you would like."); 
  if (length < 8 || length > 128) {
    alert("Please choose a number between 8 and 128");
    return;
  }
  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");

  function generatePassword(length) {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
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
