import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../app-routing.module';
import {ServicesModule} from '../services';
import {SharedModule} from '../shared';

import 'hammerjs';

@NgModule({
  declarations: [],
  exports: [
    AppRoutingModule
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    ServicesModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: 'BASE_CONFIG',
      useValue: {
        url: 'http://localhost:3000'
      }
    }
  ]
})

export class CoreModule {

  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule 已经装载，请仅在 AppModule 中引入该模块。');
    }
  }
}
