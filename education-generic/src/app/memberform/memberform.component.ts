import { Component } from '@angular/core';
import { UsersDataService } from '../services/users-data.service'

@Component({
  selector: 'app-memberform',
  templateUrl: './memberform.component.html',
  styleUrls: ['./memberform.component.css']
})
export class MemberformComponent {
  memberform: boolean = false;
  closeformflag: boolean = false;
  users: any;
  constructor(private userData: UsersDataService) {
    userData.users().subscribe((data) => {
      console.log("data", data);
      this.users = data
    });
  
  }
  getUserFromData(data: any) {
    console.log(data);
this.userData.saveusers(data).subscribe((result)=>{
  console.log(result)
})
  }

  onAction() {
    this.memberform = true;
    console.log("Done");
  }
  closeDialog() {
    this.memberform = false;
  }
}
