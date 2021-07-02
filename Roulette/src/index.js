const { prompt } = require('enquirer')
const {random} = require('lodash')

function gamble() {
    return random(0, 36, false)
}

const table = [
    32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10,
    5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26
]

const player = {
    chips: 1000,
}

const strategies = {
    even: roll => roll % 2 === 0,
    odd: roll => roll % 2 === 1,
    high: roll => roll >= 19,
    low: roll => roll < 19 && roll !== 0,
    //in filter kommt wert & index
    red: roll => table.filter((_, i)=> i % 2 === 0).includes(roll),
    black: roll => table.filter((_, i)=> i % 2 === 1).includes(roll),
}

async function playOneRound() {
    console.log(`You have ${player.chips} chips.`)
    const answers = await prompt([
        {
            type: 'select',
            name: 'bettingStrategy',
            message: 'What is your betting strategy?',
            choices: Object.keys(strategies)
        },
        {
            type: 'numeral',
            name: 'bettingAmount',
            message: 'What is your betting amount?',
        }
    ])

    if(player.chips < answers.bettingAmount){
        return
    }

    const roll = gamble()
    console.log(roll)
    if (strategies[answers.bettingStrategy](roll)){
        player.chips += answers.bettingAmount
    } else {
        player.chips -= answers.bettingAmount
    }
}


async function main() {
    while (player.chips > 0){
        await playOneRound()
    }
}

(async () => await main())()


