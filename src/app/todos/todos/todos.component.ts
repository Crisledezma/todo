import { Component } from '@angular/core';
import { Task } from './../interfaces/todos.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  public todos: Task[] = [
    {
      task: "Comprar pan",
      completed: false
    },
    {
      task: "Comprar mantequilla",
      completed: false
    },
    {
      task: "Comprar leche",
      completed: false
    },
  ]

  addTask = ( pTask: Task ) => {
    this.todos.push(pTask);
    this.showAlert();
    console.log(pTask);
  }

  showAlert() {
    const alert = document.getElementById('alert');
    if (alert) {
      alert.style.display = 'block';
      setTimeout(() => {
        alert.style.display = 'none';
      }, 2000);
    }
  }

}
