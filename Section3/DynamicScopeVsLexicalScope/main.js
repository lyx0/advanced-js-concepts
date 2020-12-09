const a = function() {
  console.log('a', this)
  const b = function() {
    console.log('b', this)
    const c = {
      hi: function() {
    console.log('c', this)
    }}
    c.hi()
  }
  b()
}

a()

/*
  In javascript our lexical scope (available data + variables where
  the function was defined) determines our available variables. Not 
  where the function is called (dynamic scope)
*/

const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var anotherFunc = function() {
      console.log('b', this)
    }
    anotherFunc()
  }
}

const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    // arrow function
    var anotherFunc = () => {
      console.log('b', this)
    }
    anotherFunc()
  }
}

const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var anotherFunc = function() {
      console.log('b', this)
    }
    // bind
    return anotherFunc.bind(this)
  }
}