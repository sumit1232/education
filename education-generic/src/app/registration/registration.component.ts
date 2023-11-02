import { Component } from '@angular/core';
import { StaffDataService } from '../services/staff-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  value = 'Clear me';
  

  
  showSendButton: boolean = true;
  showcard: boolean = false;
  submitedform: boolean = false;
  users: any;
  constructor(private userData: StaffDataService) {
    this.userData.saveUserEnquiry().subscribe((data) => {
      console.log("data", data);
      this.users = data;
    });
  }

  sendNotification(){
    this.showSendButton = true;
    this.showcard = true;
  }
  closeDialog(event: string){
    if (event === 'cancel') {
      this.showcard = false
      // this.shiftWisePopup = false;
    }
  }
  marAttendance(){
   this.submitedform = true
      this.showcard = false
  }
  openenquiryform(){
    console.log("openenquiryform Open");
    
  }
  
  getUserData(data: any) {
    console.log(data);
    this.userData.saveEnquiry(data).subscribe((result) => {
      console.log(result);

    })
  }
}
