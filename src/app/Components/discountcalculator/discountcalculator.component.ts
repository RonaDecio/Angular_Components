import { Component } from '@angular/core';

@Component({
  selector: 'app-discountcalculator',
  templateUrl: './discountcalculator.component.html',
  styleUrl: './discountcalculator.component.css'
})
export class DiscountcalculatorComponent {
  price: number = 0;          // Initial price
  discountRate: number = 0;    // Discount rate in percentage
  discountedPrice: number = 0; // Final price after discount

  // Method to calculate the discounted price
  calculateDiscount(): void {
    const discount = (this.price * this.discountRate) / 100;
    this.discountedPrice = this.price - discount;
  }
}
