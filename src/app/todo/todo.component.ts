import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { TodoModel } from '../models/todo-model';
import { Router } from '@angular/router';
import { StatusType } from '../models/status-enum';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo: TodoModel = new TodoModel();
  status: StatusType = StatusType.Completed;
  type = StatusType;
  keys: string[] = [];
  statuses: string[] = ['Новый', 'Исполнен', 'Запланирован', 'Просрочен'];

  constructor(private todoService: TodoService
    , private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.todoService.getToDoByID(id).subscribe(result => {
      this.todo = result[0]
    })
  }

  cancel() {
    this.router.navigate(['/']);
  }

  save() {
    this.router.navigate(['/']);
  }
}
