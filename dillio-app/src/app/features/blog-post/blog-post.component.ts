import { Component, OnInit, Input } from '@angular/core';
import { postService } from './post.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { IPost } from 'src/app/_models/post';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  providers:[postService]
})
export class BlogPostComponent implements OnInit {
 posts: IPost[];
 private subscription: Subscription;


 constructor(private postService: postService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.subscription = this.postService.postsChanged
    .subscribe(
      (posts: IPost[]) => {
        this.posts = posts;
      }
    );
  }
  onEditItem(index: number) {
    this.postService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
