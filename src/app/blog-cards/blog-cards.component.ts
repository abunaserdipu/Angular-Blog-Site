import { BlogDataService } from '../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../interfaces/blog';

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html',
  styleUrls: ['./blog-cards.component.css'],
})
export class BlogCardsComponent implements OnInit {
  public blogs: Blog[] = [];
  constructor(private _blogService: BlogDataService) {}

  ngOnInit(): void {
    this._blogService.getBlogs().subscribe(
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
}
