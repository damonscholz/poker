import { getDeck , shuffle } from './deck.js'
import ps from "prompt-sync";
const prompt = ps();

let boolDeal = prompt("Deal cards (y/n)")

if (boolDeal == 'y'){
    let mydeck = getDeck()
    let shufDeck = shuffle(mydeck)

    let deal = [{}]
    deal = shufDeck.slice(0,5)

    console.log(deal)
}