import {  DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na.pipe';
import { ProgressBarComponent } from '../../reusable/progress-bar/progress-bar.component';

@Component({
  selector: 'app-pipe',
  imports: [NaPipe,DatePipe,UpperCasePipe,LowerCasePipe,TitleCasePipe,JsonPipe,ProgressBarComponent],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstName:string="Angular ";
  title:string="this our country"

  currentDate:Date=new Date();

  student:any ={
    name:"Jhon Doe",
    rollNumber:1101,
    city:"Delhi",
    state:''

  }

}
