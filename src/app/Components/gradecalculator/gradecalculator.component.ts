import { Component } from '@angular/core';

@Component({
  selector: 'app-gradecalculator',
  templateUrl: './gradecalculator.component.html',
  styleUrl: './gradecalculator.component.css'
})
export class GradecalculatorComponent {
  grades: number[] = [];
  average: number = 0;
  letterGrade: string = '';

  addGrade(grade: number): void {
    if (grade >= 0 && grade <= 100) {
      this.grades.push(grade);
      this.calculateAverage();
    } else {
      alert('Please enter a valid grade between 0 and 100.');
    }
  }

  calculateAverage(): void {
    const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
    this.average = this.grades.length ? sum / this.grades.length : 0;
    this.calculateLetterGrade();
  }

  calculateLetterGrade(): void {
    if (this.average >= 90) {
      this.letterGrade = 'A';
    } else if (this.average >= 80) {
      this.letterGrade = 'B';
    } else if (this.average >= 70) {
      this.letterGrade = 'C';
    } else if (this.average >= 60) {
      this.letterGrade = 'D';
    } else {
      this.letterGrade = 'F';
    }
  }
}
