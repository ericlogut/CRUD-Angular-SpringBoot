import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';



// Importante agregar los componentes en el imports del @Component
// A partir de Angular 15 hay que agregar RouterLink y RouterOutlet para que funcionen las rutas!!
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Angular 20 + Spring Boot App -> PROJECTO CRUD';
}
