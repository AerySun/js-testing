//Simuliere ein Wuerfelspiel mit einem 12 Seitigen Wuerfel. Der Wuerfel wird so lange geworfen bis eine Zahl groesser gleich 6 herauskommt,
//alle Wuerfe werden aufgeschrieben. Dann werden alle Wuerfe zusammengezaehlt und durch die Anzahl der Wuerfe geteilt, die
//insgesamt notwendig waren.

function roll_dice() {
  return Math.floor(Math.random() * 12) + 1
}

const arr = []
let last_roll = 0
while (last_roll < 6) {
  const roll = roll_dice()
  console.log(roll)
  arr.push(roll)
  last_roll = roll
}

// let sum = 0
// for(const n of arr) {
//   sum += n
// }    
// refactoring:
// a = 0   b = first roll,   
// a = 0 + first roll, b = second roll
// a = 0 + first roll + second roll , b = third roll
//.......
const sum = arr.reduce((a, b) => a + b, 0)

let result = Math.floor(sum / arr.length)

console.log(result)
