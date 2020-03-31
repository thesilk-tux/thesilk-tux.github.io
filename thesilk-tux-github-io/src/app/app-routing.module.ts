import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogOverviewComponent } from './blog/blog-overview/blog-overview.component';
import { BlogEntryComponent } from './blog/blog-entry/blog-entry.component';

const routes: Routes = [
  { path: 'blog', component: BlogOverviewComponent },
  { path: 'blog/:id', component: BlogEntryComponent },
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: '**', component: BlogOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
