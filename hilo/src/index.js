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
function updateCreditDisplay(el) {
    el.textContent = player.credits.toString()
}

/**
 * Play one round of the high-low game.
 * 
 * @param {string} rollType 
 */
function play(rollType) {
    const roll = random(0, 9999)
    const strategy = strategies[rollType]
    if (strategy(roll)) {
        window.alert('You Won!')
    } else {
        window.alert('You lost!')
    }
}

// 
// Frontend Connection
// 

document.addEventListener('DOMContentLoaded', () => {

    // Initialize credit display
    const elCreditDisplay = document.querySelector('.credit_display')
    updateCreditDisplay(elCreditDisplay)

    // Setup click handlers for play buttons
    const btnLow = document.querySelector('#btn-low')
    const btnHigh = document.querySelector('#btn-high')

    btnLow.addEventListener('click', () => play('low'))
    btnHigh.addEventListener('click', () => play('high'))
})

