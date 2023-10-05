import { Component } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  title = 'demo';
  users: any;
  constructor(private userData: UsersDataService) {
    this.userData.users().subscribe((data) => {
      console.log("data", data);
      this.users = data;
    });
  }

  getUserData(data: any) {
    console.log(data);
    this.userData.saveusers(data).subscribe((result) => {
      console.log(result);

    })
  }

  create(){
    console.log("create");
    
  }
}
