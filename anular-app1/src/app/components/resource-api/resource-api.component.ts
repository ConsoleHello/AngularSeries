import { Component, resource } from '@angular/core';
import { ProgressBarComponent } from '../../reusable/progress-bar/progress-bar.component';

@Component({
  selector: 'app-resource-api',
  imports: [ProgressBarComponent],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css'
})
export class ResourceApiComponent {

  userList = resource({
    loader:() =>{
      return fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json() as Promise<any[]>)
    }
  })

  reloadData(){
    this.userList.reload();
  }
 

}
