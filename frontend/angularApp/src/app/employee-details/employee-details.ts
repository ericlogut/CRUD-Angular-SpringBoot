import { ChangeDetectorRef, Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-employee-details',
  imports: [RouterLink],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css'
})
export class EmployeeDetails {

  id!: number;
  employee!: Employee;
  constructor(private route: ActivatedRoute, private employeService: EmployeeService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
      this.cd.detectChanges();
    });
  }
}
