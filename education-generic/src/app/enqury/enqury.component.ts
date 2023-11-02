import { Component } from '@angular/core';
import { StaffDataService } from '../services/staff-data.service';

@Component({
  selector: 'app-enqury',
  templateUrl: './enqury.component.html',
  styleUrls: ['./enqury.component.css']
})
export class EnquryComponent {
  showSendButton: boolean = true;
  showcard: boolean = false;
  openenquryformflag: boolean = false;
  users: any;
  constructor(private userData: StaffDataService) {
    this.userData.getenquirydata().subscribe((data) => {
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
      this.openenquryformflag = false
      this.showcard = false;
    }
  }
  
  marAttendance(){
    
  }
  openenquryform(){
    this.openenquryformflag = true;
  }
  
  create(){
    console.log("create");
    
  }
  thankyoupopup(){
    alert("thank you")
    this.openenquryformflag = false;
    this.showcard = true;
  }
  getUserData(data: any) {
    console.log(data);
    this.userData.saveUsers(data).subscribe((result) => {
      console.log(result);

    })
  }
}
