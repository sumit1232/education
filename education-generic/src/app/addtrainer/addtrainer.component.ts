import { Component } from '@angular/core';
import { StaffDataService } from '../services/staff-data.service';


@Component({
  selector: 'app-addtrainer',
  templateUrl: './addtrainer.component.html',
  styleUrls: ['./addtrainer.component.css']
})
export class AddtrainerComponent {
  users: any;
  showcard: boolean = true;
  constructor(private userData: StaffDataService) {
    this.userData.users().subscribe((data) => {
      console.log("data", data);
      this.users = data;
    });
  }

  closeDialog(event: string){
    if (event === 'cancel') {
      this.showcard = false
      // this.shiftWisePopup = false;
    }
  }
  getUserData(data: any) {
    console.log(data);
    this.userData.addtrainer(data).subscribe((result) => {
      console.log(result);

    })
  }

  create(){
    console.log("create");
  }
  trainerform(){
    console.log("Trainer Form Opend");
    this.showcard = true
  }
}
