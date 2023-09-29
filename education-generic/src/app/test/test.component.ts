import { Component } from '@angular/core';
import { UsersDataService } from '../services/users-data.service'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  users: any;
  constructor(private userData: UsersDataService) {
    userData.users().subscribe((data) => {
      console.log("data", data);
      this.users = data
    });
  
  }
  getUserFromData(data: any) {
    console.log(data);
this.userData.saveusers(data).subscribe((result)=>{
  console.log(result)
})
  }
}
