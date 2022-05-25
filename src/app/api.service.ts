import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

   }


  getTasks():Observable<any>{
    return this.http.get('https://608adc0d737e470017b7410f.mockapi.io/api/v1/todos');
  }
}
