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

const randomChar = len => {
  let myPassword = [];
  for (let i = 0; i < len; i++) {
    let randomNumberBetween = Math.floor(Math.random() * lowercase.length);
    myPassword.push(lowercase[randomNumberBetween]);
  }
  return myPassword;
}

randomChar(8);

console.log(randomChar(8));