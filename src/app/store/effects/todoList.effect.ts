import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {catchError, exhaustMap, map, switchMap} from 'rxjs/operators';
import {TodoListService} from '../../services/todo-list.service';
import {TodoListAction} from '../actions/todoList.action';
import {TodoModel} from '../../models';

@Injectable()
export class TodoListEffect {

  getTodoListEffect$ = createEffect(() => this.actions$.pipe(
    ofType(TodoListAction.getTodoList),
    exhaustMap(() => this.service.get()
      .pipe(
        map(todoList => TodoListAction.getTodoListSuccess({payload: todoList})),
        catchError(() => EMPTY)
      ))
    )
  );

  postTodoListEffect$ = createEffect(() => this.actions$.pipe(
    ofType(TodoListAction.postTodoList),
    switchMap(val => this.service.post(val.payload as TodoModel)
      .pipe(
        map(todo => TodoListAction.postTodoListSuccess({payload: todo})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private service: TodoListService
  ) {
  }
}
