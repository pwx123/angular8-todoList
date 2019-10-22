import {ModuleWithProviders, NgModule} from '@angular/core';
import {TodoListService} from './todo-list.service';

@NgModule()
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        TodoListService
      ]
    };
  }
}
