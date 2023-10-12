import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl}from '@angular/forms';
import {FormGroupDirective}from '@angular/forms';
import {NgForm}from '@angular/forms';
import {Validators}from '@angular/forms';
import {ReactiveFormsModule}from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormGroup } from '@angular/forms'
// import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
// import {ErrorStateMatcher} from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { PageLengths } from '../../members/data';
import { Router } from '@angular/router';
import { StaffService } from '../services/staff.service';
import { UsersDataService } from '../services/users-data.service'

@Component({
  selector: 'app-homapage',
  templateUrl: './homapage.component.html',
  styleUrls: ['./homapage.component.css'],  
  
})
export class HomapageComponent {
  value = 'Clear me';
  showSendButton: boolean = true;
  showcard: boolean = true;
  submitedform: boolean = false;

  

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

}
