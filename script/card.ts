
export class Card {
  readonly _suit: Suit;
  readonly _rank: Rank;

  constructor(suit: Suit, rank: Rank) {
    this._suit = suit;
    this._rank = rank;
  }

  get suit() { return this._suit; }
  get rank() { return this._rank; }

  rankAsNumber(aceIsHigh = true): number {
    if (typeof this.rank === "number")
      return this.rank;

    switch (this.rank) {
      case "J": return 11;
      case "Q": return 12;
      case "K": return 13;
      case "A": return aceIsHigh ? 14 : 1;
    }
  }

  lt(other: Card): boolean {
    return this.rankAsNumber() < other.rankAsNumber();
  }

  gt(other: Card): boolean {
    return this.rankAsNumber() > other.rankAsNumber();
  }

  eq(other: Card): boolean {
    return this.rankAsNumber() === other.rankAsNumber();
  }
}

export type Suit = "Spades" | "Hearts" | "Diamonds" | "Clubs"

export type Rank = number | "J" | "Q" | "K" | "A"

export type Deck = Array<Card>;

export function newDeck(): Deck {
  return []; // TODO:
}


function randomizeDeck() {
  // TODO: Unimplemented.  
}