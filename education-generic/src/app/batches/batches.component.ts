import { Component } from '@angular/core';
import { StaffDataService } from '../services/staff-data.service';


@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent {
  users: any;
  showcard: boolean = true;
  constructor(private userData: StaffDataService) {
    this.userData.displaybatchdata().subscribe((data) => {
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
    this.userData.addbatchdata(data).subscribe((result) => {
      console.log(result);

    })
  }

  create(){
    console.log("create");
  }

  opencard(){
    console.log("Trainer Form Opend");
    this.showcard = true
  }
}
