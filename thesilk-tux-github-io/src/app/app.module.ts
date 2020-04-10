import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { GeneralModule } from './general/general.module';
import { ImpressumModule } from './impressum/impressum.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BlogModule,
    ChartsModule,
    DashboardModule,
    FontAwesomeModule,
    GeneralModule,
    ImpressumModule,
  ],
  providers: [],
})
export class AppModule {}
