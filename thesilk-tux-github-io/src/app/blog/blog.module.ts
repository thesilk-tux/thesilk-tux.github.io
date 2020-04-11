import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GeneralModule } from '../general/general.module';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { BlogOverviewComponent } from './blog-overview/blog-overview.component';
import { BlogService } from './blog.service';

@NgModule({
  declarations: [BlogEntryComponent, BlogOverviewComponent],
  imports: [CommonModule, GeneralModule, HttpClientModule, RouterModule],
  providers: [BlogService],
})
export class BlogModule {}
