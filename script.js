
// Assignment code here

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
// CTA = Call to Action - GENERATE PASSWORD

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLengthPrompt = window.prompt(
    "Please Enter the length of the Password"
  );

  if (
    passwordLengthPrompt === null ||
    passwordLengthPrompt < 8 ||
    passwordLengthPrompt > 128
  ) {
    window.alert(
      "Password must be at least minimum of 8 characters long and no more than 128 characters long."
    );
    //less than 8 not allowed
    //more than 128 not allowed
    //can not be left blank
  } else {
    var characterType = window.prompt(
      "Please Select Chacter Type, enter 1 for lowercase, enter 2 for uppercase, enter 3 for numeric, or write the number 4 for special characters)"
    );
    if (characterType === null) {
      window.alert("Password character type can not be left blank. ");
    } else {
      //lowercase, uppercase, numeric, and/or special characters
      switch (characterType) {
        case "1":
          break;
        case "2":
          break;
        case "3":
          break;
        case "4":
          break;
        default:
          window.alert(
            "Sorry please click generate password again because I do not understand your answer.  I selectd lowercase for you"
          );
          break;
      }

      var password = generatePassword(passwordLengthPrompt, characterType);
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
  }
}

function generatePassword(length, special) {

  if (special === null || special === "") {
    // default or catch all in case they left the special case blank, I don't want to have them restart, so I'm being leniant on the Customer/Guest by allowing a blank in that scenario
    special = "4";
  }

  // RANDOM PASSWORD GENERATOR
  var lowercasePassword = "abcdefghijklmnopqrstuvwxyz"; // lowercase
  var uppercasePassword = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // uppercase
  var numericPassword = "0123456789"; // numer
  var specialCharactersPassword =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$!@!$^&"; //special

  switch (special) {
    case "1":
      var charset = lowercasePassword;
      break;
    case "2":
      var charset = uppercasePassword;
      break;
    case "3":
      var charset = numericPassword;
      break;
    case "4":
      var charset = specialCharactersPassword;
      break;
  }

  var password = "";

  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }

  window.alert("Your password is " + password);
  return password;
}