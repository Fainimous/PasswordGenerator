// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Generate Password function
function generatePassword() {

    //begin with blank password and blank chars string.  
    //We will add necessary vaules to the chars string based on what results are provided in the below prompts.

    var passwd = '';
  
    var chars = '';

  //prompt() for how long the password will be
  var passwordLength = prompt("How long is the password? 8-128");

  // check/verify the user put a number between 8 and 128 characters. if it is not, then start the function again from the beginning.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must specify a number between 8 and 128.  Please try again.");
    return generatePassword();
  }

  // check/verify that the variable passwordLength is not a string.  IF it is, start the function again from the beginning.
  if (typeof passwordLength === String) {
    alert("You must specify a number between 8 and 128.  Please try again.");
    return generatePassword();
  }

  //confirm() -> what character types? and add these options to the chars string variable.  (4 options) 
  //Upper case letters?
  var upperCase = confirm("Do you want upper case letters?");

  //We just need if statements here - if its false, it just wont add the characters to the chars variable which is what I want.
  if (upperCase) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  };

  //Lower case letters?
  var lowerCase = confirm("Do you want lower case letters?");

  if (lowerCase) {
    var chars = (chars + "abcdefghijklmnopqrstuvwxyz");
  };

  // Numbers?
  var numbers = confirm("Do you want numbers?");

  if (numbers) {
    var chars = (chars + "0123456789");
  };

  // Symbols?
  var symbols = confirm("Do you want symbols?");

  if (symbols) {
    var chars = (chars + "\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~");
  };

  // what if the user says no to all the password options?  if this happens, we must provide an error message and start over
  if ((lowerCase) != true && (upperCase) != true && (symbols) != true && (numbers) != true) {
    alert("You must select at least one criteria (uppercase, lowercase, numbers or symbols) for your password.  Please try again.");
    return generatePassword();
  }

  //console.log these values for debugging purposes
  console.log("Password Length: " + passwordLength);
  console.log("Contains Uppercase: " + upperCase);
  console.log("Contains Lowercase: " + lowerCase);
  console.log("Contains Numbers: " + numbers);
  console.log("Contains symbols: " + symbols);
  console.log("characters available: "+ chars)


// time to make the password.  
//Make a for loop to add a random character to the password from the chars string created from the prompts above.  Repeat until the password is as long as the user requested.
  for (i=0; i < passwordLength; i++) {
    //return a random character from the chars string
    var c = Math.floor(Math.random()*chars.length + 1);
    //append the returned character to the password
    passwd += chars.charAt(c)
  }

    return passwd;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
