import { Component } from '@angular/core';

@Component({
  selector: 'app-memberform',
  templateUrl: './memberform.component.html',
  styleUrls: ['./memberform.component.css']
})
export class MemberformComponent {
  memberform: boolean = false;
  closeformflag: boolean = false;
  

  onAction() {
    this.memberform = true;
    console.log("Done");
  }
  closeDialog() {
    this.memberform = false;
  }
}
