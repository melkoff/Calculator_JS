// Generate random password
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

   const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
   const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const numberChars = '0123456789';
   const symbolChars = '!@#$%^&*()_+';

   let allowedChars = '';
   let password = '';

   allowedChars += includeLowercase ? lowerCaseChars : '';
   allowedChars += includeUppercase ? upperCaseChars : '';
   allowedChars += includeNumbers ? numberChars : '';
   allowedChars += includeSymbols ? symbolChars : '';

   if (length <= 0) {
      return '(Пароль повинен містити не менше 1 символу)';
   }
   if (allowedChars.length === 0) {
      return '(Повинен бути вибраний хоча б один тип символів)';
   }

   for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
   }

   return password;

}


const generateBTN = document.getElementById("generatePassword");// Generated BTN
const showGeneratedPassword = document.getElementById("showGeneratedPassword");// Show generated password

generateBTN.addEventListener("click", function () {
   const passwordLenght = 12;
   const includeLowercase = document.getElementById("lowPassword").checked ? true : false;
   const includeUppercase = document.getElementById("midPassword").checked ? true : false;
   const includeNumbers = document.getElementById("highPassword").checked ? true : false;
   const includeSymbols = document.getElementById("extremePassword").checked ? true : false;
   showGeneratedPassword.innerHTML = generatePassword(passwordLenght,
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSymbols);
})
