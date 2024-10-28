import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  resetForm: FormGroup;
  registeredUsers = [
    { username: 'usuario1', email: 'usuario1@example.com' },
    { username: 'usuario2', email: 'usuario2@example.com' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.resetForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onReset() {
    if (this.resetForm.valid) {
      const { username, email } = this.resetForm.value;
      const user = this.registeredUsers.find(u => u.username === username && u.email === email);
      
      if (user) {
        console.log('Se enviará un correo a:', email);
        this.router.navigate(['/login']);
      } else {
        console.error('El usuario no está registrado o el correo no coincide.');
      }
    }
  }
}

