//Simuliere ein Wuerfelspiel mit einem 12 Seitigen Wuerfel. Der Wuerfel wird so lange geworfen bis eine Zahl groesser gleich 6 herauskommt,
//alle Wuerfe werden aufgeschrieben. Dann werden alle Wuerfe zusammengezaehlt und durch die Anzahl der Wuerfe geteilt, die
//insgesamt notwendig waren.

function roll_dice() {
    return Math.floor(Math.random() * 12) + 1
}

let sum = 0
let rolls = 0
while (true) {
    const roll = roll_dice()
    sum += roll
    rolls += 1
    if(roll >= 6) break
}

let result = Math.floor(sum / rolls)
console.log(result)

