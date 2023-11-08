import { Component } from '@angular/core';

type Strength = 'weak' | 'medium' | 'strong';
type StrengthColor = 'green' | 'yellow' | 'red' | 'grey';

@Component({
  selector: 'app-password-strength-checker',
  templateUrl: './password-strength-checker.component.html',
  styleUrls: ['./password-strength-checker.component.css'],
})
export class PasswordStrengthCheckerComponent {
  password: string = '';

  strengthColors: Record<Strength, StrengthColor> = {
    weak: 'grey',
    medium: 'grey',
    strong: 'grey',
  };

  checkPasswordStrength() {
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSymbols = /[\W_]/.test(this.password);

    if (!this.password) {
      this.setStrengthColors();
      return;
    }

    if (this.password.length < 8) {
      this.setStrengthColors({
        weak: 'red',
        medium: 'red',
        strong: 'red',
      });
      return;
    }

    if (hasLetters && hasNumbers && hasSymbols) {
      this.setStrengthColors({
        weak: 'green',
        medium: 'green',
        strong: 'green',
      });
    } else if (
      (hasLetters && hasNumbers) ||
      (hasLetters && hasSymbols) ||
      (hasNumbers && hasSymbols)
    ) {
      this.setStrengthColors({
        weak: 'yellow',
        medium: 'yellow',
      });
    } else {
      this.setStrengthColors({
        weak: 'red',
      });
    }
  }

  private setStrengthColors(
    strengthColors: Partial<Record<Strength, StrengthColor>> = {
      weak: 'grey',
      medium: 'grey',
      strong: 'grey',
    }
  ) {
    this.strengthColors = {
      weak: 'grey',
      medium: 'grey',
      strong: 'grey',
      ...strengthColors
    };
  }
}
