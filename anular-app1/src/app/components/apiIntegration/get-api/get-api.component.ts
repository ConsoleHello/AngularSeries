import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  // get api calling

  // step1

   ArrList:any []=[];
   productsList:any []=[];

  constructor(private http: HttpClient){

  }

  getuser(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any) => {
      this.ArrList=res
      // console.log("res",res)

    })
  }



  getProducts(){
    this.http.get("https://fakestoreapi.com/products").subscribe((result:any) => {
      this.productsList=result
      console.log("result",result)
    })
  }



}
