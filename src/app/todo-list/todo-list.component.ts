import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TodoModel } from '../models/todo-model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodoService, private router: Router) { }

  public maxDate = new Date();
  public startDate = new Date(2024, 0, 1);
  public endDate = new Date();
  public data: TodoModel[] = [];
  displayedColumns: string[] = ['status', 'description', 'created', 'completed'];

  ngOnInit(): void {
    this.todoService.getToDo().subscribe(result => {
      this.data = result;
    })
  }

  selectTodo(row: any) {
    this.router.navigate(['/todo', row.id])
  }

  filterChange() {
    this.todoService.getToDo()
      .pipe(
        map(data => data.filter((todo: TodoModel) => {
          return (new Date(todo.dateCreate)).getTime() < this.endDate.getTime()
        })),
        map(data => data.filter((todo: TodoModel) => {
          return (new Date(todo.dateCreate)).getTime() > this.startDate.getTime()
        }))
      )
      .subscribe(result => {
        this.data = result;
      })
  }
}
