import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BlogModule } from './blog/blog.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, BlogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
