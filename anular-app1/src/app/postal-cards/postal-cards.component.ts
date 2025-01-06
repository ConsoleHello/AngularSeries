import { Component } from '@angular/core';
import { PostalService } from '../postal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-postal-cards',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './postal-cards.component.html',
  styleUrls: ['./postal-cards.component.css'],
})
export class PostalCardsComponent {
  postOffices: any[] = [];
  isLoading: boolean = false;
  pinCode: string = ''; // Variable to store input pin code

  constructor(private postalService: PostalService) {}

  fetchPostApiData() {
    if (!this.pinCode.trim()) {
      alert('Please enter a valid pin code.');
      return;
    }

    this.isLoading = true;
    this.postalService.getPostOfficesByPinCode(this.pinCode).subscribe(
      (response) => {
        if (response[0]?.Status === 'Success') {
          console.log("response",response)
          this.postOffices = response[0]?.PostOffice || [];
        } else {
          this.postOffices = [];
          alert('No Data Found');
        }
        this.isLoading = false;
      },
      (error) => {
        console.error('Error during fetching data:', error);
        this.isLoading = false;
      }
    );
  }
}
