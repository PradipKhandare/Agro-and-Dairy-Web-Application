import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  registrationForm!: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private homeService: HomeService
  ) {}
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;

      this.homeService.signup(formData).subscribe(
        (response: string) => {
          console.log('Response from backend:', response);
          alert(response); // Display the backend message to the user
          this.router.navigate(['/login']); // Navigate to the login page
        },
        (error) => {
          console.error('Error during signup:', error);
          alert('An error occurred during signup. Please try again.');
        }
      );
    } else {
      console.log('Form is invalid');
      alert('Please fill out the form correctly before submitting.');
    }
  }
}
