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

let lowercaseChecked = document.querySelector('#lowercase').checked;
let uppercaseChecked = document.querySelector('#uppercase').checked;
let numericalChecked = document.querySelector('#numerical').checked;
let specialChecked = document.querySelector('#special').checked;
// lowercaseChecked, uppercaseChecked, numericalChecked, specialChecked

const makeCharacterArr = () => {
  let myCharacters = [...lowercase, ...uppercase, ...numerical, ...special];
  return myCharacters;
}

const populateCharacters = len => {
  let myPassword = [];
  for (let i = 0; i < len; i++) {
    let randomNumberBetween = Math.floor(Math.random() * makeCharacterArr().length);
    myPassword.push(makeCharacterArr()[randomNumberBetween]);
  }
  return myPassword.join('');
}

console.log(populateCharacters(8));