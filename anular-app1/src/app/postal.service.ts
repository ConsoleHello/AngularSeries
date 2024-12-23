// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostalService {

//   private apiUrl = 'https://api.postalpincode.in/pincode/201301';

//   constructor(private http: HttpClient) {}

//   getPostOffices():Observable<any>{
//     return this.http.get(this.apiUrl);

//   }


// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostalService {
  private baseUrl = 'https://api.postalpincode.in/pincode';

  constructor(private http: HttpClient) {}

  getPostOfficesByPinCode(pinCode: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${pinCode}`);
  }
}

