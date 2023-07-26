"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = require("./card");
let players = [];
class Player {
    constructor(id, name) {
        this._currentBet = 0;
        this._id = id;
        this._name = name;
    }
}
class Poker {
    constructor() {
        this._players = [];
        this._deck = (0, card_1.newDeck)();
        this._smallBlind = 10;
        this._smallBlindPlayer = 0;
        this._currentPlayer = 0;
        this._onGoingGame = false;
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
