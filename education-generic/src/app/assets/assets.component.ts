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
subtitle = "Add New Assets";
  list: any[] = [];
  addtask(item: string) {
    // console.log(item);
    this.list.push({ id: this.list.length, name: item });
    console.log(this.list);
  }

  removetask(id: number) {
    console.log(id);
    this.list = this.list.filter(item => item.id !== id)
  }
}
