import {NgModule} from '@angular/core';
import {createSelector, StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import * as todoListReducer from './todoList.reducer';
import {environment} from '../../../environments/environment';
import {TodoModel} from '../../models';

export interface State {
  todoList: TodoModel[];
}

const reducers = {
  todoList: todoListReducer.reducer
};

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ]
})
export class AppReducerModule {
}

export const geTodoState = (state: State) => state.todoList;
export const getTodo = createSelector(geTodoState, todoListReducer.getTodoList);
