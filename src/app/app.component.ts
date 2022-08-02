import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hackaton-team';

  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {}

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  onToggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
