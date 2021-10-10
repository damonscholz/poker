export function getDeck()
{
	var suits = ["spades", "diamonds", "clubs", "hearts"];
	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var deck = [];

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

export function shuffle(deck){
	var sufDeck = deck.sort( () => Math.random() - 0.5)
	return sufDeck
}




