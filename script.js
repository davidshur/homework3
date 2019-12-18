const lowercase = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
const uppercase = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
const numerical = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
const special = [
  ' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/',
  ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'
];

const myCharacters = () => {
  let characterArr = [];

  let lowercaseCheck = document.querySelector('#lowercase').checked;
  let uppercaseCheck = document.querySelector('#uppercase').checked;
  let numericalCheck = document.querySelector('#numerical').checked;
  let specialCheck = document.querySelector('#special').checked;

  if (lowercaseCheck === true) {
    characterArr.push(...lowercase);
  }
  if (uppercaseCheck === true) {
    characterArr.push(...uppercase);
  }
  if (numericalCheck === true) {
    characterArr.push(...numerical);
  }
  if (specialCheck === true) {
    characterArr.push(...special);
  }
  return characterArr;
}

const populateCharacters = len => {
  let myPassword = [];
  for (let i = 0; i < len; i++) {
    let randomNumberBetween = Math.floor(Math.random() * myCharacters().length);
    myPassword.push(myCharacters()[randomNumberBetween]);
  }
  return myPassword.join('');
}

const generatePassword = () => {
  let userLength = document.querySelector('#passwordLength').value;
  console.log(populateCharacters(userLength));
}