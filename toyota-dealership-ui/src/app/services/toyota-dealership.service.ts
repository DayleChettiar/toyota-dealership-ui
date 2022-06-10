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
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/cars',
        {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }

  getCar(id: number) {
    let token = localStorage.getItem('access_token'); 
    return this.http.get('/server/api/v1/cars/' + id,
        {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }

  createCarRegistration(car) {
    let body = JSON.stringify(car);
    return this.http.post('/server/api/v1/cars/', body, httpOptions);
  }
}
