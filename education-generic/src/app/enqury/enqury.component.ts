import { Component } from '@angular/core';

@Component({
  selector: 'app-enqury',
  templateUrl: './enqury.component.html',
  styleUrls: ['./enqury.component.css']
})
export class EnquryComponent {
  showSendButton: boolean = true;
  showcard: boolean = true;

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
    
  }
}
