import { Component, signal, Signal } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName:string = "Angular 19";
  inputType = "checkbox";
  rollNumber : number = 541;
  stateName:string ="Delhi"
  isIndian:boolean=true

  myClassName:string = "bg-primary"

  firstName = signal("Naquee Alam")

  constructor() {

  }

  showAlert(message:string) {
    alert(message)
  }

  changeCourseName () {
    this.courseName="React Js"
    this.firstName.set("change Naquee To Niyaz")
  }

}
