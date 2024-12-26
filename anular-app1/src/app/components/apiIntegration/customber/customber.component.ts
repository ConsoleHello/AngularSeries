import { Component } from '@angular/core';
import { CustomerService } from '../../../service/customer.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customber',
  imports: [FormsModule],
  templateUrl: './customber.component.html',
  styleUrl: './customber.component.css'
})
export class CustomberComponent {

  customerObj: any = {
    "customerId": 0,
    "customerName": "",
    "customerCity": "",
    "mobileNo": "",
    "email": ""
  }

  customerArr:any[]=[];

  constructor(private custSrv :CustomerService){
    this.getCustomer()
  }

  getCustomer(){
    this.custSrv.loadCustomer().subscribe((res:any) => {
      this.customerArr = res.data
    })

  }

  onSaveCustomer(){
    this.custSrv.createNewCustomer(this.customerObj).subscribe((res:any) => {
      if(res.result){
        alert("Customer Created Successfully");
        this.getCustomer();
      }else {
        alert(res.message)
      }
    })

  }

}
