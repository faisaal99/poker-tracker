
interface Card {
  suit: Suit,
  rank: Rank,
}

type Suit = "Spades" | "Hearts" | "Diamonds" | "Clubs"

type Rank = number | "J" | "Q" | "K" | "A"
