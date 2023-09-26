import { Component } from '@angular/core';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // memberform: boolean = false;
  firstflag: boolean = true;
  secondflag: boolean = false;

  onAction() {
    this.secondflag = true;
    this.firstflag = false;
    console.log("Done");
  }

  onActionlogin(){
    this.secondflag = false;
    this.firstflag = true;
  }
}
