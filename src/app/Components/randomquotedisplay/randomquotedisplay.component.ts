import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomquotedisplayComponent {
  quotes: string[] = [
    'You don’t have to be great to start, but you have to start to be great. – Zig Ziglar',
    'Look in the mirror. That’s your competition. – John Assaraf',
    'The secret of getting ahead is getting started. – Mark Twain',
    'You can either suffer the pain of discipline or the pain of regret. – Jim Rohn',
    'Don’t limit your challenges, challenge your limits. – Jerry Dunn',
    'Tough times don’t last. Tough people do. – Robert H. Schuller',
    'If it doesn’t challenge you, it doesn’t change you. – Fred DeVito',
    'The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson',
  ];

  randomQuote: string = '';

  displayRandomQuote(): void {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.randomQuote = this.quotes[randomIndex];
  }
}
