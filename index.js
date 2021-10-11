import { getDeck , shuffle } from './deck.js'
import { fourOfAKind , straightFlush , fullHouse , flush , straight , threeOfAKind , twoPair , onePair} from './hand.js'
import ps from "prompt-sync";
const prompt = ps();

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


console.log('=============================================')
console.log('Welcome to EPI-USE LABS Interview Challenge')
console.log('=============================================')
console.log('')
let boolshuf = prompt("The cards have been set would you like to give them a shuffle? - (yes/no)")

let shufDeck = getDeck()

if (boolshuf == 'yes' || boolshuf == 'y'){
    console.log('Shuffling...')
    let mydeck = getDeck()
    shufDeck = shuffle(mydeck)
    sleep(2000);
    console.log('Deck has been shuffled')
}
boolshuf = ''
let boolDeal = prompt("Are you ready for the cards to be delt? - (yes/no)")
console.log('')

if (boolDeal == 'y' || boolDeal == 'yes' || boolshuf == 'n' || boolshuf == 'no'){
    let deal = [{}]
    let cardValues = []
    let cardSuits = []
    let displayCards = []
    deal = shufDeck.slice(0,5)
    for(var i = 0; i< deal.length;i++){
        cardValues[i] = deal[i].Value 
        cardSuits[i] = deal[i].Suit 
        displayCards[i] = '['+deal[i].Value + deal[i].Suit + ']' + ' '
        if (deal[i].Value == "J")
        cardValues[i] = '11' 
        if (deal[i].Value == "Q")
        cardValues[i] = '12' 
        if (deal[i].Value == "K")
        cardValues[i] = '13' 
        if (deal[i].Value == "A")
        cardValues[i] = '1' 
    }
    cardValues.sort((a, b) => a - b)


    let srtaight = straightFlush(cardValues,cardSuits)
    let four = fourOfAKind(cardValues)
    let full = fullHouse(cardValues)
    let flush_t = flush(cardSuits)
    let straight_t = straight(cardValues)
    let toak = threeOfAKind(cardValues)
    let two = twoPair(cardValues)
    let one = onePair(cardValues)
    sleep(2000);
    if(srtaight == true){
        console.log('Stright Flush!')
    }else
        if(four == true){
            console.log('Four of a kind!')
        }else
            if(full == true){
                console.log('Full House!')
            }else
                if(flush_t == true){
                    console.log('Flush!')
                }else
                    if(straight_t == true){
                        console.log('Straight!')
                    }else
                        if(toak == true){
                            console.log('Three of a Kind!')
                        }else
                            if(two == true){
                                console.log('Two Pair!')
                            }else
                                if(one == true){
                                    console.log('One Pair!')
                                }
    
    console.log("Your Hand: " + displayCards.join(''))

    
    
}