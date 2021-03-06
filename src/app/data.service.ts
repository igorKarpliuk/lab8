import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {

  constructor(private http: HttpClient) {

  }
  getProducts() {
    return this.http.get('http://localhost:8080/getproducts');
  }
  removeProduct(id) {
    return this.http.post('http://localhost:8080/deleteproduct', {id: id}, { responseType: 'text' })
  }
  addProduct(item) {
    return this.http.post('http://localhost:8080/addproduct', item, { responseType: 'text' });
  }

}