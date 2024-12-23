import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule,JsonPipe,CommonModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  studentForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userName: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required, Validators.pattern(/^\d{5}$/)]), // Example: 5-digit zip code
    isAcceptTerms: new FormControl(false, [Validators.requiredTrue])
  });

  formValue: any;

  onSave() {
    this.formValue = this.studentForm.value;
    console.log(this.formValue);
  }

}
