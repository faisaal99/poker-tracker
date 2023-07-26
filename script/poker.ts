import { newDeck, Deck, Card, } from './card.js';

export class Player {
  _id: number;
  _name: string;
  _chips!: number;
  _currentBet: number = 0;

  constructor(
    id: number,
    name: string,
  ) {
    this._id = id;
    this._name = name;
  }
}

export class Poker {
  _gameName: string;
  _players: Array<Player> = [];
  _deck: Deck = newDeck();
  _smallBlind: number = 10;
  
  _smallBlindPlayer: number = 0;
  _currentPlayer: number = 0;
  _onGoingGame: boolean = false;

  constructor(name: string) {
    this._gameName = name;
  }
  
  get smallBlind() { return this._smallBlind; }
  set smallBlind(value) { this._smallBlind = value; }

  get bigBlind() { return 2 * this._smallBlind; }

  // PLAYING GAME

  play() {
    this._onGoingGame = true;
  }

  /**
   * Assumes a new round of poker has begun, and rotates around the blinds.
   */
  newRound() {
    const nPlayers = this._players.length;

    this._smallBlindPlayer = this._smallBlindPlayer++ % nPlayers;
  }
}

