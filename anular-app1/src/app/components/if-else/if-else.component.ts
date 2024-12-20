import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else',
  imports: [FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {

  div1IsVisible=true;
  isWarningDiv2:boolean=false
  isSelectedStatus:string=""


  num1:string=""
  num2:string=""

  showDiv1(){
    this.div1IsVisible=this.div1IsVisible=true
  }
  hideDiv1(){
    this.div1IsVisible=this.div1IsVisible=false
  }

  warningDiv2(){
    this.isWarningDiv2=!this.isWarningDiv2
  }

}
