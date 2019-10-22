import {Action, createReducer, on} from '@ngrx/store';
import {TodoListAction} from '../actions/todoList.action';
import {TodoModel} from '../../models';

export const initialState: TodoModel[] = [];

const todoListReducer = createReducer(
  initialState,
  on(TodoListAction.getTodoList, state => state),
  on(TodoListAction.getTodoListSuccess, (state, {payload}) => {
    return payload;
  }),
  on(TodoListAction.searchTodoList, state => state),
  on(TodoListAction.filterTodoList, state => state),
  on(TodoListAction.postTodoList, state => state),
  on(TodoListAction.postTodoListSuccess, (state, {payload}) => {
    return [...state, payload];
  }),
  on(TodoListAction.updateTodoList, state => state)
);

export const getTodoList = (state: TodoModel[]) => state;

export function reducer(state: TodoModel[], action: Action) {
  return todoListReducer(state, action);
}
