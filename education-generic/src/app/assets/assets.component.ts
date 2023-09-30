import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent {
title = 'Form Heading';
Userdata:any={};
addassetsflag: boolean = false;

getData(data:NgForm){
  console.log(data);
  this.Userdata=data
}
addassets(){
  this.addassetsflag = true;
  console.log("Done");
}
closeDialog() {
  this.addassetsflag = false;
}
}
