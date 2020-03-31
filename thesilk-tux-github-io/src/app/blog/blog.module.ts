import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { BlogOverviewComponent } from './blog-overview/blog-overview.component';
import { BlogService } from './blog.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogEntryComponent, BlogOverviewComponent],
  imports: [CommonModule, HttpClientModule,RouterModule],
  providers: [BlogService],
})
export class BlogModule {}
