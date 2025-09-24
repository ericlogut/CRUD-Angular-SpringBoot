import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

// Servicio para manejar las operaciones CRUD con el backend de Spring Boot
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // URL del backend de Spring Boot
  private baseURL = "http://localhost:8080/api/v1/employees";
  // Inyectar el HttpClient
  constructor(private httpClient: HttpClient) { }

  // Observable es un tipo especial de stream que puede manejar múltiples valores a lo largo del tiempo
  // El servicio HttpClient devuelve un Observable de la respuesta HTTP
  // El componente se suscribe a este Observable para recibir los datos cuando estén disponibles
  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }


  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
