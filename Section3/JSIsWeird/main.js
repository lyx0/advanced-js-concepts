function weird() {
  height = 50;
  // global leakage
  // height is in global scope instead of in weird scope
  // because no let/var/const before it
  console.log(height)
}

weird()