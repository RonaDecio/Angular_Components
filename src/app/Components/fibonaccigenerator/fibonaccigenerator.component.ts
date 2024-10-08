import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonaccigenerator',
  templateUrl: './fibonaccigenerator.component.html',
  styleUrl: './fibonaccigenerator.component.css'
})
export class FibonaccigeneratorComponent {
  count: number = 0;
  fibonacciSequence: number[] = [];

  generateFibonacci(): void {
    this.fibonacciSequence = [];

    let a = 0, b = 1, nextTerm;

    for (let i = 1; i <= this.count; i++) {
      this.fibonacciSequence.push(a);
      nextTerm = a + b;
      a = b;
      b = nextTerm;
    }
  }
}
