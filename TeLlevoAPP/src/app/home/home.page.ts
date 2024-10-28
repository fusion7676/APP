import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';

  ngOnInit() {
    const registeredUser = JSON.parse(localStorage.getItem('Usuario Registrado') || '{}');
    this.username = registeredUser.username || 'Invitado';
    console.log('Retrieved username:', this.username);
  }
}

