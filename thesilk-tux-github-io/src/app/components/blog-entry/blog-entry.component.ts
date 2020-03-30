import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { IBlogOverview } from 'src/app/interfaces/blog-overview.interface';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss'],
})
export class BlogEntryComponent implements OnInit {
  blogOverview: IBlogOverview[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<IBlogOverview[]>('assets/blog/overview.json')
      .subscribe((res) => {
        this.blogOverview = res;
        this.getTimeSinceLastUpdate(this.blogOverview[0]);
      });
  }

  getTimeSinceLastUpdate(blog: IBlogOverview): any {
    const updateTime = new Date().getTime() - new Date(blog.updatedAt).getTime();
    console.log(updateTime / 360000.0)
  }
}
