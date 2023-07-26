export class Card {
    constructor(suit, rank) {
        this._suit = suit;
        this._rank = rank;
    }
    get suit() { return this._suit; }
    get rank() { return this._rank; }
    rankAsNumber(aceIsHigh = true) {
        if (typeof this.rank === "number")
            return this.rank;
        switch (this.rank) {
            case "J": return 11;
            case "Q": return 12;
            case "K": return 13;
            case "A": return aceIsHigh ? 14 : 1;
        }
    }
    lt(other) {
        return this.rankAsNumber() < other.rankAsNumber();
    }
    gt(other) {
        return this.rankAsNumber() > other.rankAsNumber();
    }
    eq(other) {
        return this.rankAsNumber() === other.rankAsNumber();
    }
}
export function newDeck() {
    return []; // TODO:
}
function randomizeDeck() {
    // TODO: Unimplemented.  
}
