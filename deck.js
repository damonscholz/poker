export function getDeck()
{
	let suits = ["♠", "♦", "♣", "♥"];
	let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	let deck = [];

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < values.length; x++)
		{
			var card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

//Shuffle deck by sorting the objects in a random fashion
export function shuffle(deck){
	let sufDeck = deck.sort( () => Math.random() - 0.5)
	return sufDeck
}




