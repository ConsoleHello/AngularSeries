import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructurealDirComponent } from './components/directive/structureal-dir/structureal-dir.component';
// import { DataBindingComponent } from './components/data-binding/data-binding.component';
// import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
// import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StructurealDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // encapsulation: ViewEncapsulation.None, 
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'anular-app1';
}
