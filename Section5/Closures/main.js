function a() {
  let grandpa = 'grandpa'
  return function b() {
    let father = 'father'
    return function c() {
      let son = 'son'
      // son has access to grandpa 
      console.log(`${grandpa} > ${father} > ${son}`);
    }
  }
}

const one = a();
a()()()