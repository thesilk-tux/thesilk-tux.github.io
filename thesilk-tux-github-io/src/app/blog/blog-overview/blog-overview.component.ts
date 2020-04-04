import { Component, OnInit } from '@angular/core';

import { IBlogOverview } from '../blog.interface';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss'],
})
export class BlogOverviewComponent implements OnInit {
  blogOverview: IBlogOverview[];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService
      .getBlogOverview()
      .subscribe((res) => (this.blogOverview = res));
  }

  getTimeSinceLastUpdate(blog: IBlogOverview): any {
    const updateTime =
      new Date().getTime() - new Date(blog.updatedAt).getTime();
  }

  public shortenLeadParagraph(content: any): string {
    const words = content.split(' ');
    let lengthLead = 0;
    for (const word of words) {
      lengthLead += word.length;
      if (lengthLead + word.length >= 100) {
        return content.substring(0, lengthLead) + ' ...';
      }
    }
    return content;
  }
}
