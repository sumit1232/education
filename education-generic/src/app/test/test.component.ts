import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { PageLengths } from '../../members/data';
import { Router } from '@angular/router';
import { StaffService } from '../services/staff.service';
import { UsersDataService } from '../services/users-data.service'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
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
