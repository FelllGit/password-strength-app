import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PasswordStrengthCheckerComponent } from './password-strength-checker/password-strength-checker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PasswordStrengthCheckerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [PasswordStrengthCheckerComponent],
})
export class AppModule { }
