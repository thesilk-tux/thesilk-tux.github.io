import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { IBlogEntry, IBlogOverview } from './blog.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  public getBlogOverview(): Observable<IBlogOverview[]> {
    return this.http
      .get<IBlogOverview[]>('assets/blog/overview.json')
      .pipe(retry(3));
  }

  public getBlogEntry(blogFile: string): Observable<IBlogEntry> {
    return this.http
      .get<IBlogEntry>(`assets/blog/${blogFile}.json`)
      .pipe(retry(3));
  }
}
