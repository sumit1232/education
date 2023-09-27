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

getData(data:NgForm){
  console.log(data);
  this.Userdata=data
}
}
