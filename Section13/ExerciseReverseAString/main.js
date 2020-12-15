function reverse(str) {
  const splitString = str.split("");
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join("");
  return joinArray;
}

function reverseString2(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString
}

console.log(reverse('Henlo my name is lyx0'));
console.log(reverseString2('Henlo my name is lyx0'));