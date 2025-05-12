import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  login(requestBody: any): Observable<any> {
    console.log('RequestBody', requestBody);
    return this.http.post<any>('http://localhost:8080/User/login', requestBody);
  }

  signup(registrationForm: any) {
    const requestBody = {
      firstName: registrationForm.firstName,
      lastName: registrationForm.lastName,
      birthday: registrationForm.birthday,
      gender: registrationForm.gender,
      email: registrationForm.email,
      phone: registrationForm.phone,
      password: registrationForm.password,
      confirmPassword: registrationForm.confirmPassword,
    };
    console.log('RequestBody', requestBody);

    return this.http.post('http://localhost:8080/User/save', requestBody, {
      responseType: 'text',
    });
  }
}
