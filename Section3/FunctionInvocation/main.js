// Function Expression
var canada = () => {
  console.log('cold')
}

// Function Declaration
function india() {
  console.log('warm')
}

// Function Invocation/Call/Execution
canada()

function marry(...args)
{
  console.log(args)
  console.log(`${args[0]} married ${args[1]}`);
}

marry('me', 'you')
