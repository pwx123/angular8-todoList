import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TodoModel, TodoStatusModel} from '../models';
import {map} from 'rxjs/operators';

@Injectable()
export class TodoListService {
  private readonly domain = 'todoLists';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    @Inject('BASE_CONFIG') private config,
    private http: HttpClient
  ) {
  }

  get(): Observable<TodoModel[]> {
    const url = `${this.config.url}/${this.domain}`;
    return this.http.get(url).pipe(
      map(res => res as TodoModel[])
    );
  }

  search(content: string): Observable<TodoModel[]> {
    const url = `${this.config.url}/${this.domain}`;
    return this.http.get(url, {params: {content_like: content}}).pipe(
      map(res => res as TodoModel[])
    );
  }

  filterStatus(status: TodoStatusModel): Observable<TodoModel[]> {
    const url = `${this.config.url}/${this.domain}`;
    return this.http.get(url, {params: {status: status as unknown as string}}).pipe(
      map(res => res as TodoModel[])
    );
  }

  post(todo: TodoModel): Observable<TodoModel> {
    const url = `${this.config.url}/${this.domain}`;
    return this.http.post(url, JSON.stringify(todo), {headers: this.headers}).pipe(
      map(res => res as TodoModel)
    );
  }


  update(todo: TodoModel): Observable<TodoModel> {
    const url = `${this.config.url}/${this.domain}`;
    return this.http.patch(url, JSON.stringify(todo), {headers: this.headers}).pipe(
      map(res => res as TodoModel)
    );
  }
}
