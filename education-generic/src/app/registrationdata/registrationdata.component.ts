import { Component, Input } from '@angular/core';
import { StaffDataService } from '../services/staff-data.service'

@Component({
  selector: 'app-registrationdata',
  templateUrl: './registrationdata.component.html',
  styleUrls: ['./registrationdata.component.css']
})
export class RegistrationdataComponent {
  @Input() enquiry: any;
  title = 'demo';
  users: any;
  saveUserEnquiry: any;
  constructor(private userData: StaffDataService) {
    userData.saveUserEnquiry().subscribe((data) => {
      console.log("data", data);

      this.users = data
    });
    // console.log(this.users);
  }

  getImagePath1(){
    console.log("getImagePath1 Function");
  }
}
