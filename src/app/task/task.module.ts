import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskHomeComponent} from './task-home/task-home.component';
import {TaskRoutingModule} from './task-routing.module';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskItemComponent} from './task-item/task-item.component';
import {SharedModule} from '../shared';

@NgModule({
  declarations: [
    TaskHomeComponent,
    TaskListComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TaskRoutingModule
  ]
})
export class TaskModule {
}
