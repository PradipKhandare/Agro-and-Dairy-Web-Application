import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  constructor(private router: Router) { }


  onClickSignup() {
    this.router.navigate(['sign-up']);
  }

  onLoginClick() {
    this.router.navigate(['homepage']);
  }

}
