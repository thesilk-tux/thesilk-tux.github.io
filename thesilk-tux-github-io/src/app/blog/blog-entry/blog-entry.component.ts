import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IBlogEntry } from 'src/app/blog/blog.interface';
import { BlogService } from 'src/app/blog/blog.service';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss'],
})
export class BlogEntryComponent implements OnInit {
  public blog: IBlogEntry = {};

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const blogFile = this.route.snapshot.paramMap.get('id');

    this.blogService.getBlogEntry(blogFile).subscribe((res) => {
      this.blog = res;
    });
  }

  public getContentKey(content: any): string {
    return Object.keys(content)[0];
  }
}
