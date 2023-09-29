import { Component } from '@angular/core';

@Component({
  selector: 'app-post-api',
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css']
})
export class PostApiComponent {
  getUserData(data:any){
    console.log(data);
    
  }
}
