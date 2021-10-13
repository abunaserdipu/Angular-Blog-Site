import { Blog } from './blog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogDataService {
  private _url: string = 'https://dev.softlabit.com/api/v1/blog/get-all-blogs';
  constructor(private http: HttpClient) {}
  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this._url);
  }
}
