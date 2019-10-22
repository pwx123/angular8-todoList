import {TodoStatusModel} from './todoStatus.model';

export interface TodoModel {
  id?: string;
  status: TodoStatusModel;
  content: string;
  dueTime?: string;
  createTime?: string;
  finishTime?: string;
  deleteTime?: string;
}
