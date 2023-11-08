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
      this.setStrengthColors('red', 'red', 'red');
      return;
    }

    if (hasLetters && hasNumbers && hasSymbols) {
      this.setStrengthColors('green', 'green', 'green');
    } else if (
      (hasLetters && hasNumbers) ||
      (hasLetters && hasSymbols) ||
      (hasNumbers && hasSymbols)
    ) {
      this.setStrengthColors('yellow', 'yellow');
    } else {
      this.setStrengthColors('red');
    }
  }

  private setStrengthColors(
    colorWeak: StrengthColor = 'grey',
    colorMedium: StrengthColor = 'grey',
    colorStrong: StrengthColor = 'grey'
  ) {
    this.strengthColors.weak = colorWeak;
    this.strengthColors.medium = colorMedium;
    this.strengthColors.strong = colorStrong;
  }
}
