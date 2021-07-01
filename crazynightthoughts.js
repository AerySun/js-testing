//Simuliere ein Wuerfelspiel mit einem 10 Seitigen Wuerfel. Der Wuerfel wird so lange geworfen bis eine Zahl groesser gleich 8 herauskommt.
// Gebe alle Ergebnisse aus und addiere das letzte + 2.

function roll_dice() {
    return Math.floor(Math.random() * 10) + 1
}

const arr = []
let last_roll = 0

while (last_roll < 8) {
    const roll = roll_dice()
    console.log(roll)
    arr.push(roll)
    last_roll = roll
}
console.log(arr[arr.length - 1] + 2)

//now instead of add 2, subtrahise the last roll through all rolls

function roll_dice2() {
    return Math.floor(Math.random() * 10) + 1
}

const arri = []
let last_rolli = 0

while (last_rolli < 8) {
    const roll = roll_dice2()
    console.log(roll)
    arri.push(roll)
    last_rolli = roll
}
console.log(arri[arri.length - 1] - arri.length)