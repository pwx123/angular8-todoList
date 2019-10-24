import {NgModule} from '@angular/core';
import {TaskHomeComponent} from './task-home/task-home.component';
import {TaskRoutingModule} from './task-routing.module';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskItemComponent} from './task-item/task-item.component';
import {SharedModule} from '../shared';
import {NewTaskDialogComponent} from './new-task/new-task-dialog.component';

@NgModule({
  declarations: [
    TaskHomeComponent,
    TaskListComponent,
    TaskItemComponent,
    NewTaskDialogComponent
  ],
  imports: [
    SharedModule,
    TaskRoutingModule
  ],
  entryComponents: [
    NewTaskDialogComponent
  ]
})
export class TaskModule {
}
