import { BlogDataService } from './../blog-data.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html',
  styleUrls: ['./blog-cards.component.css'],
})
export class BlogCardsComponent implements OnInit {
  public blogs: Blog[] = [];
  constructor(private _blogService: BlogDataService) {}

  ngOnInit(): void {
    this._blogService.getBlogs().subscribe((response: any) => {
      console.log(response.data);
      this.blogs = response.data;
    });
  }
}
