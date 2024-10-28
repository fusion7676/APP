import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, User } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = ''; 

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],   
      lastName: ['', [Validators.required]],   
      email: ['', [Validators.required, Validators.email]], 
      username: ['', [Validators.required]],    
      password: ['', [Validators.required, Validators.minLength(6)]], 
    });
  }

  ngOnInit() {}

  onRegister() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;

      this.userService.registerUser({
        firstName: formData.firstName,  
        lastName: formData.lastName,    
        email: formData.email,          
        username: formData.username,    
        password: formData.password,    
      } as User).subscribe( 
        response => {
          console.log('Usuario registrado:', response);
          this.successMessage = 'Usuario registrado con éxito';
          this.errorMessage = '';
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Error al registrar usuario', error);
          this.errorMessage = 'Error al registrar usuario: ' + (error.error || 'Error desconocido');
          this.successMessage = ''; 
        }
      );
    } else {
      console.log('Formulario inválido');
      this.errorMessage = 'Por favor completa todos los campos requeridos';
      this.successMessage = '';
    }
  }
}

