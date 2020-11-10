import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent {

  todoList: string[];
  listTitle: string;

  constructor() {
    this.listTitle = 'To Do List';
    this.todoList = [];
  }

  onSubmit(todoItem) {
    this.todoList.push(todoItem);
  }

  remove(item) {
    const index: number = this.todoList.indexOf(item);
    if (index !== -1) {
        this.todoList.splice(index, 1);
    }
  }

  // prevents checking checkbox on enter
  handleInput(event: KeyboardEvent) {
    event.stopPropagation();
 }

}
