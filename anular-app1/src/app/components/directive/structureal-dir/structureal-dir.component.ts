// import {CommanModule} from "@angular/common"
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structureal-dir',
  imports: [CommonModule,FormsModule],
  templateUrl: './structureal-dir.component.html',
  styleUrl: './structureal-dir.component.css'
})
export class StructurealDirComponent {

  isDiv1Visible : boolean = false;
  isDiv2Visible : boolean = false;

  num1:string = "";
  num2:string = "";
isActive:boolean = false;
 selectedState:string =''

 cityArray: string [] =['Pune','Patna','Nagpur','Mumbai','Delhi'];
 studentList: any[] = [
  {studId:11, name:"AAA", city: "Pune", isAcive: false},
  {studId:22, name:"BBB", city: "Mumbai", isAcive: false},
  {studId:33, name:"CCC", city: "Delhi", isAcive: true},
  {studId:44, name:"DDD", city: "Patna", isAcive: false},
 ]
  

  showDiv1(){
    this.isDiv1Visible=true;
  }
  hideDiv1(){
    this.isDiv1Visible=false;
  }

  toggleDiv2(){
    this.isDiv2Visible = !this.isDiv2Visible
  }

}
