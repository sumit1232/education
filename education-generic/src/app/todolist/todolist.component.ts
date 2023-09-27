import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  title = "Todolist";
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
