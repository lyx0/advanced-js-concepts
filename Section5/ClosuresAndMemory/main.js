// Memory Efficient
function heavyDuty(index) {
  const bigArray = new Array(7000).fill(':)')
  console.log('created!')
  console.log(bigArray[index]);
}

heavyDuty(688)
heavyDuty(688)
heavyDuty(688)
const getHeavyDuty = heavyDuty2();
getHeavyDuty(688)
getHeavyDuty(700)
getHeavyDuty(800)


function heavyDuty2(index) {
  const bigArray = new Array(7000).fill(':)')
  console.log('created again!')
  console.log(bigArray[index]);
  return function(index) {
    return bigArray[index]
  }
}


// Encapsulation
// in ClosuresAndEncapsulation

