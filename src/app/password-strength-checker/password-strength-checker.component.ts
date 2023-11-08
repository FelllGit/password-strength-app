import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength-checker',
  templateUrl: './password-strength-checker.component.html',
  styleUrls: ['./password-strength-checker.component.css']
})
export class PasswordStrengthCheckerComponent {
  password: string = '';
  strengthColors: string[] = ['gray', 'gray', 'gray'];

  private regexPatterns = {
    letters: /[A-Za-z]/,
    digits: /\d/,
    symbols: /\W|_/ 
  };

  checkPasswordStrength(): void {
    if (!this.password || this.password.length < 8) {
      this.strengthColors = ['red', 'gray', 'gray'];
    } else if (this.isStrongPassword(this.password)) {
      this.strengthColors = ['green', 'green', 'green'];
    } else if (this.isMediumPassword(this.password)) {
      this.strengthColors = ['yellow', 'yellow', 'gray'];
    } else {
      this.strengthColors = ['red', 'gray', 'gray'];
    }
  }

  private isStrongPassword(password: string): boolean {
    return this.regexPatterns.letters.test(password) &&
           this.regexPatterns.digits.test(password) &&
           this.regexPatterns.symbols.test(password);
  }

  private isMediumPassword(password: string): boolean {
    const testResults = [
      this.regexPatterns.letters.test(password),
      this.regexPatterns.digits.test(password),
      this.regexPatterns.symbols.test(password)
    ].filter(Boolean);
    
    return testResults.length === 2;
  }
}
