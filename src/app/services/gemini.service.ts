
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {


  private apiKey = 'AIzaSyC7yWNB2li4SitWcBHu5m62oRaNdmb2K-M'; // Replace with actual API Key

  private apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';


  constructor(public http: HttpClient) { }

  askGemini(question: string): Observable<any> {
    const body = { contents: [{ parts: [{ text: question }] }] };
    return this.http.post<any>(`${this.apiUrl}?key=${this.apiKey}`, body);
  }
}
