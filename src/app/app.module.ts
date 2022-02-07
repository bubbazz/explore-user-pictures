import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { YassiComponent } from './yassi/yassi.component';
import { YassiwrapperComponent } from './yassiwrapper/yassiwrapper.component';
import { ExcControlsModule, ExgModalService, ExgModalSimpleComponent, ExgWidgetService } from 'exc-controls-v2';
import { ExcCoreModule } from 'exc-core-v2';
import { ExcRestMode, ExcRestModule, ExcRestService, ExcTranslateService } from 'exc-rest-v2';
import { environment } from 'src/environments/environment';
import { Router, RouterModule } from '@angular/router';

const Widgets: any = [ExgModalSimpleComponent, YassiwrapperComponent];

@NgModule({
  declarations: [
    AppComponent,
    YassiComponent,
    YassiwrapperComponent,
  ],
  imports: [
    BrowserModule,
    ExcControlsModule,
    ExcCoreModule,
    ExcRestModule,
    RouterModule.forRoot([])
    //    ExcRestService

  ],
  providers: [ExgWidgetService, ExgModalService],
  bootstrap: [AppComponent],
})

export class AppModule {
  constructor(private router: Router, private excTranslate: ExcTranslateService, private widgets: ExgWidgetService, private excRest: ExcRestService) {
    widgets.Components = Widgets;
    ExcCoreModule.RegisterConfig('Environment', environment);
    ExcCoreModule.RegisterService('Router', router);
    excRest.Mode = ExcRestMode.GROOT;
    excTranslate.activate();
  }
}
