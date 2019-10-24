import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoModel, TodoStatusModel} from '../../models';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() todo: TodoModel;
  @Output() updateTaskStatus = new EventEmitter<{ id: string, status: TodoStatusModel }>();
  private readonly todoStatusModel = TodoStatusModel;

  constructor() {
  }

  get dueDate() {
    if (!this.todo.dueTime) {
      return '-';
    }
    const dueTime = new Date(this.todo.dueTime);
    const nowTime = new Date();
    const deltaTime = (dueTime.getTime() - nowTime.getTime()) / (1000 * 60 * 60 * 24);
    const deltaDays = Math.floor(deltaTime);
    if (deltaDays < 0) {
      return `过期${Math.abs(deltaDays)}天`;
    }
    return `${deltaDays}天`;
  }

  ngOnInit() {
  }

  changeStatusClick() {
    let status;
    switch (this.todo.status) {
      case TodoStatusModel.DELETE:
      case TodoStatusModel.FINISH:
        status = TodoStatusModel.NEW;
        break;
      case TodoStatusModel.NEW:
        status = TodoStatusModel.FINISH;
        break;
      default:
        status = TodoStatusModel.FINISH;
    }
    this.updateTaskStatus.emit({
      id: this.todo.id,
      status
    });
  }
}
