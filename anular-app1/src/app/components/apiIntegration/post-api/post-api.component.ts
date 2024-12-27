import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {
  carList: any[] = [];

  carObj: any = {
    "carId": 0,
    "brand": "",
    "model": "",
    "year": "",
    "color": "",
    "dailyRate": "",
    "carImage": "",
    "regNo": ""

  }

  http = inject(HttpClient);

  ngOnInit(): void {
    // to trigger the api call function
    this.getAllCars()
  }


  getAllCars() {
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((res: any) => {
      this.carList = res.data
    })
  }


  onSaveCar() {
    console.log('Payload:', this.carObj);
    this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar", this.carObj).subscribe((res: any) => {
      console.log('Response:', res);
      if (res.result) {
        alert("Car created Successfully");
        this.getAllCars();
      } else {
        alert(res.message);
      }
    });
  }

  updateCar() {
    this.http.put("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar", this.carObj).subscribe((res: any) => {
      if (res.result) {
        alert("Car Updated Successfully");
        this.getAllCars();
      } else {
        alert(res.message);
      }
    })
  }

  onDelete(id: number) {
    // console.log("id",id)
    const isDelete = confirm("Are you sure want delete")
    if (isDelete == true) {
      this.http.delete("https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid=" + id).subscribe((res: any) => {
        if (res.result) {
          alert("Car Deleted Successfully");
          this.getAllCars();
        } else {
          alert(res.message);
        }
      })
    }
  }

  onEdit(data: any) {
    this.carObj = data

  }















}


