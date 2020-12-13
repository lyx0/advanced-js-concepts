/*
 Imperative vs Declarative

 Imperative code is code that tells the machine what to do and how to do it

 Declarative code is code that tells the machine what to do and what should happen,
 doesnt tell the computer how to do it
*/
// imperative
for (let i = 0; i < 1000; i++) {
  console.log(i)
}

// declarative
[1,2,3].forEach(item => console.log(item))
