import {createAction, props} from '@ngrx/store';
import {Err, TodoModel, TodoStatusModel} from '../../models';

const getTodoList = createAction('[Task Page] GET');
const getTodoListSuccess = createAction('[Task Page] GET Success', props<{ payload: TodoModel[] }>());
const searchTodoList = createAction('[Task Page] SEARCH', props<{ payload: { 'content_like': string } }>());
const searchTodoListSuccess = createAction('[Task Page] SEARCH Success', props<{ payload: TodoModel[] }>());
const filterTodoList = createAction('[Task Page] FILTER', props<{ payload: { 'status': TodoStatusModel } }>());
const filterTodoListSuccess = createAction('[Task Page] FILTER Success', props<{ payload: TodoModel[] }>());
const postTodoList = createAction('[Task Page] POST', props<{ payload: TodoModel }>());
const postTodoListSuccess = createAction('[Task Page] POST Success', props<{ payload: TodoModel }>());
const updateTodoList = createAction('[Task Page] UPDATE', props<{
    payload: {
      status?: TodoStatusModel;
      content?: string;
      createTime?: Date;
      finishTime?: Date;
      deleteTime?: Date;
    }
  }>()
);
const updateTodoListSuccess = createAction('[Task Page] UPDATE Success', props<{ payload: TodoModel }>());
const todoFailed = createAction('[Task Page] FAILED', props<{ payload: Err }>());

export const TodoListAction = {
  getTodoList,
  getTodoListSuccess,
  searchTodoList,
  searchTodoListSuccess,
  filterTodoList,
  filterTodoListSuccess,
  postTodoList,
  postTodoListSuccess,
  updateTodoList,
  updateTodoListSuccess,
  todoFailed
};
