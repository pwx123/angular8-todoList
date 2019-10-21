import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskHomeComponent} from './task-home/task-home.component';
import {TaskRoutingModule} from './task-routing.module';

@NgModule({
  declarations: [
    TaskHomeComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule {
}
