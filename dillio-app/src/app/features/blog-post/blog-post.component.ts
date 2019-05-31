import { Component, OnInit, Input } from '@angular/core';
import { post } from 'src/app/_models/post';
import { postService } from './post.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
 posts: post[];
  constructor() { }

  ngOnInit() {
    const bp = new postService();
    this.posts = bp.getAll();
  }

}
