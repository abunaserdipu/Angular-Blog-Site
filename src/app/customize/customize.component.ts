import { BlogDataService } from '../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../interfaces/blog';

@Component({
  selector: 'app-blog-input',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css'],
})
export class CustomizeComponent implements OnInit {
  public blogs: Blog[] = [];
  columnsToDisplay: string[] = ['title', 'slug', 'author', 'actions'];

  constructor(private blogData: BlogDataService) {}

  ngOnInit(): void {
      this.blogData.getBlogs().subscribe(
        (response) => {
          if (response.success) {
            this.blogs = response.data;
          }
          console.log(this.blogs);
        },
        (err) => {
          console.log(err);
        }
      );
  }
  

  getBlogsFormData(data: Blog[]) {
    console.warn(data);
    this.blogData.postBlogs(data).subscribe((response) => {
      console.warn(response);
    });
  }

  deleteBlog(data: any) {
    this.blogData.deleteBlog(data.id).subscribe
  }
}
