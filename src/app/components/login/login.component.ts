import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private router: Router, private homeService: HomeService) {}

  onClickSignup() {
    this.router.navigate(['sign-up']);
  }

  onLoginClick() {
    const requestBody = { email: this.email, password: this.password };
    this.homeService.login(requestBody).subscribe((response: any) => {
      console.log(response);
    });
    this.router.navigate(['/home']);
  }
}
