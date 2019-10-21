import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SharedModule} from './shared';
import {CoreModule} from './core';
import {AppComponent} from './app.component';
import {MAT_DATE_LOCALE} from '@angular/material';

import {TaskModule} from './task/task.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    TaskModule
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'zh-CN'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
