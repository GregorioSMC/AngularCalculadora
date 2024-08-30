import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  private apiUrl = 'https://localhost:7158/api/Calculadora'; // URL de la API

  constructor(private http: HttpClient) { }

  operar(num1: number, num2: number, operacion: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/operar?num1=${num1}&num2=${num2}&operacion=${operacion}`);
  }
}
