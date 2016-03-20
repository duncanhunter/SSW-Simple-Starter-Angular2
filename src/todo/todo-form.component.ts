import {Component, Output, EventEmitter} from 'angular2/core';
import {Todo} from './todo';

@Component({
  selector: 'todo-form',
  template: `
    <form (ngSubmit)="addTodo()">
      <input type="text" class="form-control" [(ngModel)]="task" size="30"
             placeholder="add new todo here">
      <input class="btn btn-primary" type="submit" value="add">
    </form>`
})
export class TodoForm {
  @Output() newTask = new EventEmitter<Todo>();
  task: string = '';

  addTodo() {
    if (this.task) {
      this.newTask.next({text:this.task, done:false});
    }
    this.task = '';
  }
}