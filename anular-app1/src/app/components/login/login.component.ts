import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj:any ={
    userName:'',
    password:'' 
  }

  apiObj:any={
    EmailId: "",
    Password: ""
  }

  router =inject(Router);

  http =inject(HttpClient)

  onLogin(){
    // if(this.loginObj.userName =="admin" && this.loginObj.password=="1122"){
    // this.router.navigateByUrl("postal-api")
    // }else{
    //   alert("wrong creditial")
    // }

    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",this.apiObj).subscribe((res:any) => {
      debugger;
      localStorage.setItem("angular19",res.data.token)
      this.router.navigateByUrl("postal-api")
      alert("Logged In Successful")

    },error => {
      alert("Wrong credentials")
    })
  }

}
