import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-element',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './form-element.component.html',
  styleUrl: './form-element.component.css'
})
export class FormElementComponent {


userDetails:FormGroup = new FormGroup({
  firstName: new FormControl(),
  lastName: new FormControl(),
  phone_number: new FormControl(),
  email: new FormControl(),
  password: new FormControl(),
  token: new FormControl(),
  companyCin: new FormControl(),
  gstin: new FormControl(),
  companyType: new FormControl()

})

userDetailsValues:any

onSubmit() {
  this.userDetailsValues = this.userDetails.value;
  console.log('Form Values:', this.userDetailsValues);
  console.log('FormGroup Object:', this.userDetails);
}


}
