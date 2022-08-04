//empty array to store generatePassword method
var characterLength = [];

//empty array for storing prompt choices
var choiceArr = [];

//ALL CHARACTERS AVAILABLE FOR PASSWORD GENERATION
var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','_','+','?','<','\'','>',':','{',',','}','[',']','`','~','|','_','\\','\"','\''];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  //if getPrompts returns true, generate new password
  var truePrompts = getPrompts();
  if (truePrompts) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword;
  } 
  else {
    passwordText.value = "";
  }
}


//generates
function generatePassword() {
  var password = "";
  //keep repeating fucntion until the specified characterLength criteria is met
  for(var i = 0; i < characterLength; i++) {
    //math.floor will round to an integer after multiplying a random number between 0 and 1 to the value assigned to the choiceArr
    var randomCharacter = Math.floor(Math.random()*choiceArr.length);
    //password is redefined 
    password = password + choiceArr[randomCharacter];
  }
  return password;
}



function getPrompts(){
  //redefine choiceArr to 'clear' the string if any value has been applied to it previously
  choiceArr = [];
  characterLength = prompt("Pick a password length between 8 and 128 characters (numbers ONLY)");

  //prompt will only accept an integer value between 8 and 128
  if(characterLength < 8 && characterLength > 128) {
    alert("Passowrd must be 8 to 128 characters. Enter a new password that fits criteria.");
    return false;
  }

  if (confirm("Include lowercase characters?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }

  if (confirm("Include uppercase characters?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }

  if (confirm("Include special characters?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }

  if (confirm("Include numerical characters?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}