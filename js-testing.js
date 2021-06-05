// Outcome HelloWorld

console.log('Hello World')
console.log('Welcome in javascript')

function addition (val1, val2, callback) {
  callback(val1 + val2)
}
function show (val) {
  console.log(val)
}

addition(10, 5, show)

function addition2 (val1, val2, callback) {
  callback(val1)
  callback(val2)
  callback(val1 + val2)
}

function show (val) {
  console.log(val)
}

addition2(10, 5, show)
