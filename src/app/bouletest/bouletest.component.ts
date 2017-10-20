import { Component, OnInit } from '@angular/core';
// import { TodoService } from '../shar/todo.service.ts'

@Component({
  selector: 'app-bouletest',
  templateUrl: './bouletest.component.html',
  styleUrls: ['./bouletest.component.css']
})
export class BouletestComponent implements OnInit {
  variable = false;
  table = ['ga', 'bu', 'zo', 'meu'];
  newTruc:string;
  addTable() {
    this.table.push(this.newTruc);
    this.newTruc = '';
  }
  remove(index:number) {
    this.table.splice(index, 1)
  }

  constructor() { }

  ngOnInit() {
  }

}
