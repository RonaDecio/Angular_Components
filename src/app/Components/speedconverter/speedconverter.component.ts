import { Component } from '@angular/core';

@Component({
  selector: 'app-speedconverter',
  templateUrl: './speedconverter.component.html',
  styleUrl: './speedconverter.component.css'
})
export class SpeedconverterComponent {
  speedKmh: number = 0;
  speedMph: number = 0;

  // Method to convert km/h to mph
  convertSpeed(): void {
    const conversionFactor = 0.621371;
    this.speedMph = this.speedKmh * conversionFactor;
  }
}
