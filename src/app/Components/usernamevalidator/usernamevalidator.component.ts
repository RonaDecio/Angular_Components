import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrl: './usernamevalidator.component.css'
})
export class UsernamevalidatorComponent {
  username: string = '';
  isValid: boolean = false;
  validationMessage: string = '';

  validateUsername(): void {
    const usernamePattern = /^[A-Za-z][A-Za-z0-9]*$/;

    if (this.username.length < 5) {
      this.isValid = false;
      this.validationMessage = 'Username must be at least 5 characters long.';
    } else if (!usernamePattern.test(this.username)) {
      this.isValid = false;
      this.validationMessage = 'Username can only contain letters and numbers, and must start with a letter.';
    } else {
      this.isValid = true;
      this.validationMessage = 'Username is valid!';
    }
  }
}
