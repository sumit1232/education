import { Component } from '@angular/core';
import { StaffDataService } from '../services/staff-data.service'

@Component({
  selector: 'app-trainerdata',
  templateUrl: './trainerdata.component.html',
  styleUrls: ['./trainerdata.component.css']
})
export class TrainerdataComponent {
  users: any;
  saveUserEnquiry: any;
  constructor(private userData: StaffDataService) {
    userData.Trainerdata().subscribe((data) => {
      console.log("data", data);

      this.users = data
    });
    // console.log(this.users);
  }
}
