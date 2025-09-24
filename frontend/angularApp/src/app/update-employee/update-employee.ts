import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.css'
})
export class UpdateEmployee {

  id!: number;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private cd: ChangeDetectorRef, private router: Router) {}
    
  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: (data) => {
        this.employee = data;
        this.cd.detectChanges(); // fuerza actualización de la vista
      },
      error: (err) => console.error(err)
    });
  }
    
  updateEmployee() {
      console.log("Update employee works");
  }

  onSubmit() {
      this.employeeService.updateEmployee(this.id, this.employee).subscribe({
        next: (data) => {
          console.log(data);
          this.goToEmployeeList();
        },
        error: (err) => console.error(err)
      });
  }

  goToEmployeeList() {
      this.router.navigate(['/employees']);  
  }
}
