import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})


export class ActuatorsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  actuate(device: String, id: number, value: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/actuate/${device}/${id}/${value}`, {});
  }
}