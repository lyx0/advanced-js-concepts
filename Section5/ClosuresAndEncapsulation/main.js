// Memory efficient
// in ClosuresAndMemory

// run in browser console

// Encapsulation
const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () =>  {
    timeWithoutDestruction = -1;
    console.log('boom');
  }
  setInterval(passTime, 1000)
  return {
    totalPeaceTime: totalPeaceTime,
  }
}

const ohno = makeNuclearButton();
ohno.totalPeaceTime();


// Encapsulation helps with just only passing whatever is needed without
// giving access to everything. least prvililege needed