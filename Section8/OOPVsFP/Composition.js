// many operations on fixed data
// stateless
// pure
// declerative -- what we want to be done
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}
const amazonHistory = []
const compose = (f, g) => (...args) => f(g(...args))
purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCart
)(user, {name: 'laptop', price: 200})

function purchaseItem(...fns) {
  return fns.reduce(compose)
}

function addItemToCart(user, item) {
  amazonHistory.push(user)
  const updateCart = user.cart.concat(item)
  return Object.assign({}, user, { cart: updateCart })
}

function applyTaxToItems(user) {
  amazonHistory.push(user)
  const {cart} = user;
  const taxRate = 1.3;
  const updatedCart = cart.map(item => {
    return {
      name: item,
      price: item.price*taxRate
    }
  })
  return Object.assign({}, user, { cart: updatedCart })
}

function buyItem(user) {
  amazonHistory.push(user)
  return Object.assign({}, user, {purchases: user.cart})
}

function emptyCart(user) {
  amazonHistory.push(user)
  return Object.assign({}, user, {cart: []})
}

