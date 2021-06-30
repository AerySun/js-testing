//Simuliere ein Wuerfelspiel mit einem 8 Seitigen Wuerfel. Der Wuerfel wird so lange geworfen bis eine Zahl groesser gleich 5 herauskommt.
// Dann werden alle Wuerfe zusammengezaehlt und plus 1 addiert.

function roll_dice() {
    return Math.floor(Math.random() * 8) + 1

}

let sum = 0

// eslint-disable-next-line no-constant-condition
while(true) {
const roll = roll_dice()
console.log(roll)
sum += roll
if (roll >= 5) break
}

let result = Math.floor(sum + 1)
console.log(result)