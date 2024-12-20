import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-foorloop-switch',
  imports: [FormsModule],
  templateUrl: './foorloop-switch.component.html',
  styleUrl: './foorloop-switch.component.css'
})
export class FoorloopSwitchComponent {

  dayNumber:string='';
  

  cityArray: string[] = ['Pune', 'Patna', 'Nagpur', 'Mumbai', 'Delhi'];
  studentList: any[] = [
    { studId: 11, name: "AAA", city: "Pune", isAcive: false },
    { studId: 22, name: "BBB", city: "Mumbai", isAcive: false },
    { studId: 33, name: "CCC", city: "Delhi", isAcive: true },
    { studId: 44, name: "DDD", city: "Patna", isAcive: false },
  ]

}
