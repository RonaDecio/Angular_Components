import { Component } from '@angular/core';

@Component({
  selector: 'app-temperaturealert',
  templateUrl: './temperaturealert.component.html',
  styleUrl: './temperaturealert.component.css'
})
export class TemperaturealertComponent {
  temperature: number = 0;
  temperatureMessage: string = '';

  // Method to check the temperature and display a corresponding message
  checkTemperature(): void {
    if (this.temperature < 15) {
      this.temperatureMessage = 'It\'s too cold!';
    } else if (this.temperature > 30) {
      this.temperatureMessage = 'It\'s too hot!';
    } else {
      this.temperatureMessage = 'The temperature is just right!';
    }
  }
}
