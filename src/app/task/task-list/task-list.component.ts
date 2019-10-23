import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoModel, TodoStatusModel} from '../../models';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() taskList: TodoModel[] = [];
  @Output() updateStatus = new EventEmitter<{ id: string, status: TodoStatusModel }>();

  constructor() {
  }

  get newTodoList() {
    return this.taskList.filter(v => v.status === TodoStatusModel.NEW);
  }

  get finishTodoList() {
    return this.taskList.filter(v => v.status === TodoStatusModel.FINISH);
  }

  get deleteTodoList() {
    return this.taskList.filter(v => v.status === TodoStatusModel.DELETE);
  }

  ngOnInit() {
  }

  handleUpDateStatus(value: { id: string, status: TodoStatusModel }) {
    this.updateStatus.emit(value);
  }
}
