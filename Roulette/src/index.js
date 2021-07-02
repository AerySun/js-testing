const { prompt } = require('enquirer')
const {random} = require('lodash')

//gibt random zahl zwischen 0 und 36 aus
function gamble() {
    return random(0, 36, false)
}
//array der roulette Zahlen
const table = [
    32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10,
    5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26
]
//players chips at the begin
const player = {
    chips: 1000,
}
//object
const strategies = {
//gerade zahl, roll restlos teilbar durch 0
    even: roll => roll % 2 === 0, 
//ungerade zahl, roll nicht restlos teilbar
    odd: roll => roll % 2 === 1,
//hohe zahl, roll groesser/gleich 19
    high: roll => roll >= 19,
//niedrige zahl, roll kleiner als 19 und ungleich 0
    low: roll => roll < 19 && roll !== 0,
//rote zahl, array wird gefiltert, Wert ist hier egal, index=i, funktion wird geoeffnet => i restlos teilbar durch 2, dann wird gecheckt ob eine gerade Zahl mit der gewuerfelten Zahl uebereinstimmt.
    red: roll => table.filter((_, i)=> i % 2 === 0).includes(roll),
//rot checkt jede zweite Stelle im array, da sich rot und schwarz abwechseln. Schwarz checkt alle ungeraden Zahlen -> 3,5,7,9..Stelle im array.
    black: roll => table.filter((_, i)=> i % 2 === 1).includes(roll),
}

async function playOneRound() {
//gibt an wie viele chips der Spieler am anfang hat.
    console.log(`You have ${player.chips} chips.`)
//object mit 1. auswahl, und 2. numerische eingabe. fragt den Spieler nach seinem Einsatz und laesst ihn aus allen moeglichkeiten aus ,strategies, waehlen.
    const answers = await prompt([
        {
            type: 'select',
            name: 'bettingStrategy',
            message: 'What is your betting strategy?',
            choices: Object.keys(strategies)
        },
//fragt den Spieler wie viel chips er setzen will
        {
            type: 'numeral',
            name: 'bettingAmount',
            message: 'What is your betting amount?',
        }
    ])
//wenn die vorhandenen chips weniger sind, als die gesetzten geht dasd spiel nicht weiter
    if(player.chips < answers.bettingAmount){
        return
    }
//Konstante mit dem Namen roll, die auf die Funktion gamble zugreift
    const roll = gamble()
//Zeigt die gewuerfelte Zahl in der Konsole an
    console.log(roll)
// Wenn der spieler seine strategie gewaehlt hat, und diese mit dem zufaelligen Wurf uebereinstimmt, werden Spielers chips um die gesetzte Anzahl verdoppelt.
    if (strategies[answers.bettingStrategy](roll)){
        player.chips += answers.bettingAmount
    } else {
//andernfalls werden die gesetzten chips von den vorhandenen abgezogen 
        player.chips -= answers.bettingAmount
    }
}

//Solange der Spieler mehr als 0 Chips hat wiederholt sich das Spiel.
async function main() {
    while (player.chips > 0){
        await playOneRound()
    }
}

(async () => await main())()


