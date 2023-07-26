// @filename: card.ts
export {
  Card,
  newDeck,
  Deck,
};

interface Card {
  suit: Suit,
  rank: Rank,
}

type Suit = "Spades" | "Hearts" | "Diamonds" | "Clubs"

type Rank = number | "J" | "Q" | "K" | "A"

type Deck = Array<Card>;

function newDeck(): Deck {
  return []; // TODO:
}


function randomizeDeck() {
  // TODO: Unimplemented.  
}