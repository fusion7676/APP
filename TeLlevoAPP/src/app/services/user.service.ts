import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;   
  email: string; 
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  registerUser(userData: { firstName: string; lastName: string; email: string; username: string; password: string; }) {
    return this.http.post('http://localhost:3000/users', userData);
}
}

