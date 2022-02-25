const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

var copy = document.querySelector("#btnCopy");
var generateBtn = document.querySelector("#passBtn");

copy.addEventListener('click', () =>{
    const btnCopy = document.querySelector("#btnCopy");
    btnCopy.onclick = function(){

        MyInp.select();
        
        document.execCommand("Copy");
    };
});
var MyInp = document.querySelector("#password");
    

    

generateBtn.addEventListener('click', writePassword);
    
function writePassword(){
    var password = generatePassword(12);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}
    
function generatePassword(characterAmount) {
    let charCodes = LOWERCASE_CHAR_CODES
    charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    
    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
      passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
  }
function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
      array.push(i)
    }
    return array
  }