import { Component, Input } from '@angular/core';
import { Task } from '../interfaces/todos.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input('data') tareas: Task[] = [];
}
