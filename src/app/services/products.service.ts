import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  fetchAllProdcutsCategory() {
    const url = `http://localhost:8080/product`;
    return this.http.get<any>(url);
  }

  addProductsByCategory(requestBody: any) {
    const url = `http://localhost:8080/product`;
    return this.http.post<any>(url, requestBody);

  }

 
addItemToGroup(groupName: string, item: any) {
  const url = `http://localhost:8080/item/${groupName}`;
  return this.http.post(url, item);
}


}
