import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  isAuthenticated(): boolean {
    const isAuthenticated = !!localStorage.getItem('Usuario Registrado');
    console.log('Autenticado', isAuthenticated);
    return isAuthenticated;
  }

  login(username: string, password: string):boolean {
    const registeredUsers = [
      { username: 'usuario1', password: 'contraseña1' },
      { username: 'usuario2', password: 'contraseña2' }
    ];

    console.log('Intentando iniciar sesión con:', username, password);

    const user = registeredUsers.find(user => user.username === username && user.password === password);

    if (user) {
      localStorage.setItem('Usuario Registrado', JSON.stringify(user));
      console.log('Usuario guardado en Local Storage:', user);
      return true; 
    } else {
      console.error('Credenciales incorrectas');
      return false;
    }
  }

  logout() {
    localStorage.removeItem('Usuario Registrado');
  }
}

