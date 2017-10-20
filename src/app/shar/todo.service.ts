import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  private table:string[] = ['ga', 'bu', 'zo', 'meu'];

  getTable():string[] {
    return this.table;
  }

  add(todo:string) {
    this.table.push(todo);
  }
  remove(index:number) {
    this.table.splice(index, 1)
  }

  constructor() { }

}
