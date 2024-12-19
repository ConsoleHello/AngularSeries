import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  div1BgColor: string = 'bg-primary';
  isDiv2Active:boolean = false;
  num1:string ='';
  num2:string='';
  isActive:boolean=false

  studentList: any[] = [
    {studId:11, totalMarks:20, gender:"Male", name:"AAA", city: "Pune", isAcive: true},
    {studId:22, totalMarks:40, gender:"Female", name:"BBB", city: "Mumbai", isAcive: false},
    {studId:33, totalMarks:60, gender:"Male", name:"CCC", city: "Delhi", isAcive: true},
    {studId:44, totalMarks:80, gender:"Female", name:"DDD", city: "Patna", isAcive: false},
   ]

  AddRedClass() {
    this.div1BgColor = "bg-danger"

  }
  AddBlueClass() {
    this.div1BgColor = "bg-primary"
  }

  toggleDiv2Class(){
    this.isDiv2Active=!this.isDiv2Active
  }

}
