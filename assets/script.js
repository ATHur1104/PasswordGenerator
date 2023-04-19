// Assignment Code
var generateBtn = document.querySelector("#generate");
// Connect the length to a window input box that allows for 8-128
var password = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var length = prompt("Please choose number of characters.");  
for (let i = 0; i <= length; i++) {
  var rand = Math.floor(Math.random() * chars.length); 
  password += chars();}
  return password;
}
  function generate() {passwordText.value = password;
}
}


















// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
