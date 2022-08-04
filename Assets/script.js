// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//empty array to store generatePassword method
var characterLength = [];

//empty array for storing prompt choices
var choiceArray = [];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  //if checkPrompts returns true, generate new password
  var validPrompts = checkPrompts();
  if (validPrompts) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword;
  } 
  else {
    passwordText.value = "";
  }
}

//ALL CHARACTERS AVAILABLE FOR PASSWORD GENERATION
var specialCharArray = ['!','@','#','$','%','^','&','*','(',')','_','+','?','<','\'','>',':','{',',','}','[',']','`','~','|','_','\\','\"','\''];
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function checkPrompts(){
  //redefine choiceArr to 'clear' the string if any value has been applied to it previously
  choiceArray = [];
  characterLength = prompt("Pick a password length between 8 and 128 characters (numbers ONLY)");

  //prompt will only accept an integer value between 8 and 128
  if(characterLength < 8 && characterLength > 128) {
    alert("Passowrd must be 8 to 128 characters. Enter a new password that fits criteria.");
    return false;
  }

  if (confirm("Include lowercase characters?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }

  if (confirm("Include uppercase characters?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }

  if (confirm("Include special characters?")) {
    choiceArr = choiceArray.concat(specialCharArray);
  }

  if (confirm("Include numerical characters?")) {
    choiceArray = choiceArray.concat(numberArray);
  }
  return true;
}

//generates
function generatePassword() {
  var password = "";
  //keep repeating fucntion until the specified characterLength criteria is met
  for(var i = 0; i < characterLength; i++) {
    //math.floor will round to an integer after multiplying a random number between 0 and 1 to the value assigned to the choiceArr
    var randomCharacter = Math.floor(Math.random()*choiceArray.length);
    //password is redefined 
    password = password + choiceArray[randomCharacter];
  }
  return password;
}



//copy to clipboard
var generateBtn = document.querySelector("#copy");
generateBtn.addEventListener("click", copyToClipboard);


function copyToClipboard() {
  var copyText = document.getElementById("copy");

  alert("I wish I worked :(")
}



