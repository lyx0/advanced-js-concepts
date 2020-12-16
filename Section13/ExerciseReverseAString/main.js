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

function reverse2(str) {
  return str.split('').reverse().join('')
}

const reverse3 = str => [...str].reverse().join('');


console.log(reverse('Henlo my name is lyx0'));
console.log(reverse2('Henlo my name is lyx0'));
console.log(reverse3('Henlo my name is lyx0'));
console.log(reverseString2('Henlo my name is lyx0'));