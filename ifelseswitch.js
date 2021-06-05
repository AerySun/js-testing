function test1 () {
  const val1 = 1
  const val2 = '1'
  const val3 = 1
  //true bc == only compares the value, not the type.
  console.log(val1 == val2)
  //false bc === compares the types too
  console.log(val1 === val2)
  //true bc type and value is the same
  console.log(val1 == val3)
  console.log(val1 === val3)
}
test1()

function division (counter, denominator) {
  //Division soll nur ausgefuehrt werden wenn der nenner ungleich 0 ist
  if (denominator !== 0) {
    //else wird ausgefuehrt wenn der nenner ungleich 0 ist
    return counter / denominator
  }
  //else wird ausgefuehrt wenn der Nenner 0 ist
  else {
    return 'Divide by 0 is not possible'
  }
}
division()

function division (counter, denominator) {
  if (denominator !== 0) {
    return counter / denominator
  } else if (denominator === 0) {
    return 'Divide by 0 is not allowed'
  }
}
division()

function div2 (a, b) {
  if (b === 0) return 'Divide by 0 is not allowed'

  return a / b
}

//ternary operator / ternaere operatoren
//const variable = Bedingung ? Val : Val   // bedingung ?  true: false
//const climate = temperature > 20 ? "Hot" : "Cold"
const daytime = 'morning'
const greeting = daytime === 'morning' ? 'good morning' : 'good evening'
console.log(greeting)

// switch (available) {
//     case value:
//     //codeblock
//     break
//     case value2:
//     //codeblock
//     break
//     default:
//     //codeblock
//     break
// }

function greetings (time) {
  switch (time) {
    case 'morning':
      console.log('Good morning!')
      break

    case 'afternoon':
      console.log('Good afternoon!')
      break

    case 'evening':
      console.log('Good evening')
      break

    default:
      console.log('Hello!')
      break
  }
}
greetings()

function uebung1 (val1, val2) {
  const result = val1 - val2

  if (result > 0) {
    console.log(`The result ${result} is positive`)
  } else {
    console.log(`The result ${result} is negative`)
  }
}
uebung1(10, 5)
uebung1(5, 10)

function uebung1_2 (a, b) {
    const result = a - b
    console.log(`The result ${result} is ${result > 0 ? 'positive' : 'negative'}`)
}

function uebung2 (val) {
  if (val % 2 === 0) {
    console.log(`${val} ist teilbar durch 2`)
  }
  if (val % 5 === 0) {
    console.log(`${val} ist durch 5 teilbar`)
  }
}
uebung2(1)
uebung2(2)
uebung2(3)
uebung2(4)
uebung2(5)
uebung2(6)
uebung2(7)
uebung2(8)
uebung2(9)
uebung2(10)
