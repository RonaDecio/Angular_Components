import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationchecker',
  templateUrl: './multiplicationchecker.component.html',
  styleUrl: './multiplicationchecker.component.css'
})
export class MultiplicationcheckerComponent {
  number1: number = 0;
  number2: number = 0;
  result: string = '';

  checkMultiple(): void {
    if (this.number2 === 0) {
      this.result = 'Cannot divide by zero';
    } else if (this.number1 % this.number2 === 0) {
      this.result = `${this.number1} is a multiple of ${this.number2}`;
    } else {
      this.result = `${this.number1} is not a multiple of ${this.number2}`;
    }
  }
}
