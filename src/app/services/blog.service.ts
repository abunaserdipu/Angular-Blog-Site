import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from '../interfaces/blog';

const API_BLOG = environment.apiBaseUrl + '/api/v1/blog/'

@Injectable({
  providedIn: 'root',
})
export class BlogDataService {
  constructor(private http: HttpClient) {}
  getBlogs() {
    return this.http.get<{ success: boolean; data: Blog[]; count: number }>(
      API_BLOG + 'get-all-blogs'
    );
  }

  postBlogs(data:Blog[]){
    return this.http.post(API_BLOG + 'add-blog',data)
  }
}
