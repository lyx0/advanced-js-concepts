// try {} catch {}
// catch()

function fail() {
  try {
   console.log('this works')
    throw new Error('oopsie!!')
  } catch (error) {
    console.log('this didnt work', error)
    console.log(error.name)
    console.log(error.message)
  } finally {
    console.log('i will run no matter what')
    return 'returning fail'
  }
  console.log('!!! :)');
}

fail()

try {
  try {
    setTimeout(function() {
      fakevariable
    }, 1000)
  } catch (error) {
    throw new Error(error)
  }
} catch (error) {
    console.log('got it', error)
}