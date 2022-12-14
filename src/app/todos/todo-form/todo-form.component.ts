import { Component, Input } from '@angular/core';
import { Task } from '../interfaces/todos.interface';

@Component({
  selector   : 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls  : ['./todo-form.component.css']
})
export class TodoFormComponent {

  @Input('addTask') addTask: any
 
  todo       : Task   = {task: '',completed: false}
  title      : string = 'Agregar tareas';
  placeholder: string = 'Ingrese la tarea';

  add() {
    this.addTask({ ...this.todo });
    this.todo = { task: '', completed: false };
  }

  addWithEvent(e: any) {
    this.todo.task = e.target[0].value;
    this.addTask({ ...this.todo });
    this.todo = { task: '', completed: false };
    e.target[0].value = '';
  }

  inputHandler(e: any) {
   // console.log(e);
  }
}
