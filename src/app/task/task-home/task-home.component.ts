import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import {Observable} from 'rxjs';
import {TodoModel} from '../../models';
import {TodoListAction} from '../../store/actions/todoList.action';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
  todoList$: Observable<TodoModel[]>;

  constructor(
    private store$: Store<fromRoot.State>
  ) {
    this.store$.dispatch(TodoListAction.getTodoList());
    this.todoList$ = this.store$.select(fromRoot.getTodo);
  }

  ngOnInit() {
  }

}
