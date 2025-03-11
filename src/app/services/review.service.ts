import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  saveCustomerReview(customerName: string, customerReview: string): Observable<any> {
    const requestBody = {
      name: customerName,
      review: customerReview
    }
    const url = `http://localhost:8080/_Data`;
    return this.http.post<any>(url, requestBody);
  }

}
