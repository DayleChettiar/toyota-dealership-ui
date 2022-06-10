import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ToyotaDealershipService {

  constructor(private http:HttpClient) { }

  getCars() {
    return this.http.get('/server/api/v1/cars');
  }

  getCar(id: number) {
    return this.http.get('/server/api/v1/cars/' + id);
  }

  createCarRegistration(car) {
    let body = JSON.stringify(car);
    return this.http.post('/server/api/v1/cars/', body, httpOptions);
  }
}
