import { random } from "lodash";

// 
// Constants
// 

const player = {
    credits: 1000
}

const strategies = {
    high: roll => roll > 5049,
    low: roll => roll < 4950,
}

// 
// Logic
// 

/**
 * Update an HTMLElement to show the current credits.
 * 
 * @param {HTMLElement} el 
 */
function updateCreditDisplay() {
    const elCreditDisplay = document.querySelector('.credit_display')
    elCreditDisplay.textContent = player.credits.toString()
}

/**
 * Play one round of the high-low game.
 * 
 * @param {string} rollType 
 */
function play(rollType) {
    const roll = random(0, 9999)
    const strategy = strategies[rollType]
    const betAmount = getBetAmount()
    if (player.credits < betAmount) {
        return
    }

    if (strategy(roll)) {
        
        player.credits += betAmount
    } else {
        
        player.credits -= betAmount
    }
    updateResultDisplay(roll, strategy(roll))
    updateCreditDisplay()
}

function updateResultDisplay(roll, won) {
    const eleResultDisplay = document.querySelector('.result_display')
    eleResultDisplay.textContent = roll.toString()
    eleResultDisplay.classList.remove('won', 'lost')
    eleResultDisplay.classList.add(won ? 'won' : 'lost')
}

function getBetAmount() {
    const el = document.querySelector('.bet')
    return Math.max(parseInt(el.value) || 1, 1)
}

function setBetAmount(value) {
    const el = document.querySelector('.bet')
    el.value = value.toString()
}

function doubleBet() {
    const newBet = Math.min(getBetAmount() * 2, player.credits)
    setBetAmount(newBet)
}

function halfBet() {
    const newBet = Math.max(Math.floor(getBetAmount() / 2),1)
    setBetAmount(newBet)
}

function betAll() {
    setBetAmount(player.credits)
}

function reset() {
    setBetAmount(1)
}

let autorollIntervalId = null
function autoroll() {
    if(autorollIntervalId !== null) {
        clearInterval(autorollIntervalId) 
        autorollIntervalId = null
        return
    }
    autorollIntervalId = setInterval(() => play('high'), 250)
}

// 
// Frontend Connection
// 

document.addEventListener('DOMContentLoaded', () => {
    
    // Setup click handlers for play buttons
    const btnLow = document.querySelector('#btn-low')
    const btnHigh = document.querySelector('#btn-high')
    const doubleTwo = document.querySelector('#double')
    const halfTwo = document.querySelector('#half')
    const allIn = document.querySelector('#allIn')
    const setBack = document.querySelector('#setBack')
    const btnautoroll = document.querySelector('#autoroll')

    btnLow.addEventListener('click', () => play('low'))
    btnHigh.addEventListener('click', () => play('high'))
    doubleTwo.addEventListener('click', () => doubleBet())
    halfTwo.addEventListener('click', () => halfBet())
    allIn.addEventListener('click', () => betAll())
    setBack.addEventListener('click', () => reset())
    btnautoroll.addEventListener('click' , () => autoroll())
    
    updateCreditDisplay()
    updateResultDisplay(0)
})

