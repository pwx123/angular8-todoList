import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import {Observable, Subscription} from 'rxjs';
import {TodoModel, TodoStatusModel} from '../../models';
import {TodoListAction} from '../../store/actions/todoList.action';
import {formatTime} from '../../utils/time.util';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit, OnDestroy {
  todoList$: Observable<TodoModel[]>;
  preScrollTop = 0;
  preScrollDown = false;
  scrollClass = {
    add: true,
    'add-hidden': false
  };
  sub: Subscription;
  searchValue = new FormControl('');


  constructor(
    private store$: Store<fromRoot.State>
  ) {
    this.store$.dispatch(TodoListAction.getTodoList());
    this.todoList$ = this.store$.select(fromRoot.getTodo);
    this.sub = this.searchValue.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(s => s === '' || s.length > 2)
    )
      .subscribe(v => this.store$.dispatch(TodoListAction.searchTodoList({payload: v})));
  }

  ngOnInit() {
    window.addEventListener('scroll', () => this.onScroll(), false);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', () => this.onScroll(), false);
    this.sub.unsubscribe();
  }

  onScroll() {
    const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    const scrollDown: boolean = scrollTop - this.preScrollTop > 0;
    if (scrollDown !== this.preScrollDown) {
      this.scrollClass['add-hidden'] = scrollDown;
    }
    this.preScrollDown = scrollDown;
    this.preScrollTop = scrollTop;
  }

  searchValueClick() {
    this.store$.dispatch(TodoListAction.searchTodoList({payload: this.searchValue.value.trim()}));
  }

  updateStatus(value: { id: string, status: TodoStatusModel }) {
    const time = new Date();
    const updateValue = {
      id: value.id,
      status: value.status
    };
    if (value.status === TodoStatusModel.FINISH) {
      // @ts-ignore
      updateValue.finishTime = formatTime(time);
    }
    if (value.status === TodoStatusModel.DELETE) {
      // @ts-ignore
      updateValue.delteTime = formatTime(time);
    }
    this.store$.dispatch(TodoListAction.updateTodoList({payload: updateValue}));
  }
}
