import { Component } from '@angular/core';

@Component({
  selector: 'app-memorymatchgame',
  templateUrl: './memorymatchgame.component.html',
  styleUrl: './memorymatchgame.component.css'
})
export class MemorymatchgameComponent {
  cards: any[] = [];
  flippedCards: any[] = [];
  matchedCards: any[] = [];
  canFlip: boolean = true;


  cardSymbols: string[] = ['🍎', '🍌', '🍇', '🍉', '🍓', '🍒', '🍍', '🍑'];

  constructor() { }

  ngOnInit(): void {
    this.initializeGame();
  }


  initializeGame(): void {
    this.cards = [];
    this.flippedCards = [];
    this.matchedCards = [];

    const cardDeck = [...this.cardSymbols, ...this.cardSymbols];
    this.cards = this.shuffleArray(cardDeck.map((symbol, index) => ({
      id: index,
      symbol,
      flipped: false
    })));
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  flipCard(card: any): void {
    if (!this.canFlip || card.flipped || this.matchedCards.includes(card)) {
      return;
    }

    card.flipped = true;
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.canFlip = false;
      this.checkForMatch();
    }
  }


  checkForMatch(): void {
    const [card1, card2] = this.flippedCards;

    if (card1.symbol === card2.symbol) {
      this.matchedCards.push(card1, card2);
      this.flippedCards = [];
      this.canFlip = true;


      if (this.matchedCards.length === this.cards.length) {
        setTimeout(() => {
          alert('Congratulations! You matched all pairs!');
          this.initializeGame();
        }, 500);
      }
    } else {
      setTimeout(() => {
        card1.flipped = false;
        card2.flipped = false;
        this.flippedCards = [];
        this.canFlip = true;
      }, 1000);
    }
  }
}
