import { Component } from '@angular/core';

@Component({
  selector: 'app-passwordstrengthchecker',
  templateUrl: './passwordstrengthchecker.component.html',
  styleUrl: './passwordstrengthchecker.component.css'
})
export class PasswordstrengthcheckerComponent {
  password: string = '';
  strength: string = '';


  checkStrength(): void {
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    if (this.password.length < 6) {
      this.strength = 'Weak';
    } else if (this.password.length <= 8 && hasLetters && (hasNumbers || hasSpecialChars)) {
      this.strength = 'Medium';
    } else if (this.password.length > 8 && hasLetters && hasNumbers && hasSpecialChars) {
      this.strength = 'Strong';
    } else {
      this.strength = 'Weak';
    }
  }
}
