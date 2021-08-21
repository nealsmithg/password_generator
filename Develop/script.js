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

function generatePassword(){
  var password = [];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","Z","W","X","Y","Z"];
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numbers = ["1","2","3","4","5","6","7","8","9","0"];
  var specCharacters = [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",":","<","=",">","?","@","[","]","^","_","`","{","|","}","~",'/'];
  var passwordArray = [];
  var length = window.prompt("How many characters do you want the password to be?\n(min:8 max:128)");
  while (length < 8 || length > 128){
    window.alert("Please pick a number between 8 and 128.");
    var length = window.prompt("How many characters do you want the password to be?\n(min:8 max:128)");
  }
  var useUpper = window.confirm("Do you want to use upper case letters?");
  var useLower = window.confirm("Do you want to use lower case letters?");
  var useNumber = window.confirm("Do you want to use numbers?");
  var useSpec = window.confirm("Do you want to use special characters?");
  if (useUpper == true){
    passwordArray = passwordArray.concat(upperCase);
  };
  if (useLower == true){
    passwordArray = passwordArray.concat(lowerCase);
  };
  if (useNumber == true){
    passwordArray = passwordArray.concat(numbers);
  };
  if (useSpec == true){
    passwordArray = passwordArray.concat(specCharacters);
  };
  for(var i = 0; i < length; i++){
    password.push(passwordArray[Math.floor(Math.random()*passwordArray.length)]);
  };
  console.log(passwordArray);
  passwordText = password.join("");
  return passwordText;
}