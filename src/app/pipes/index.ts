import {NgModule} from '@angular/core';
import {SliceTimePipe} from './slice-time.pipe';

@NgModule({
  exports: [
    SliceTimePipe
  ],
  declarations: [
    SliceTimePipe
  ]
})

export class AppPipeModule {
}
