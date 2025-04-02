import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  constructor(private router: Router) { }

  onSubmit() {
    // Perform form validation or API calls if needed

    // Navigate to the login page
    this.router.navigate(['/login']);
  }

}
