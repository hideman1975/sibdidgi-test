import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoModel } from './models/todo-model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getToDo(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    return this.httpClient.get('assets/db.json', options);
  }

  getToDoByID(id: number | string): Observable<any> {
    return this.getToDo()
      .pipe(
        map(data => data.filter((item: TodoModel) => item.id === id)));
  }
}