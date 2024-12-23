import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templete',
  imports: [FormsModule,JsonPipe,CommonModule],
  templateUrl: './templete.component.html',
  styleUrl: './templete.component.css'
})
export class TempleteComponent {

  studentObj: any = {
    firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    zipCode:'',
    isAcceptTerms:false
  }

  formValue:any;

  onSubmit(){
    debugger;
    this.formValue=this.studentObj
  }

  restForm(){
    this.studentObj = {
      firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    zipCode:'',
    isAcceptTerms:false

    }
  }

}
