import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { IPost } from 'src/app/_models/post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  providers:[BlogService]
})
export class BlogPostComponent implements OnInit {
 posts: IPost[];
 private subscription: Subscription;


 constructor(private blogService: BlogService) { }

  ngOnInit() {
    debugger;
    this.blogService.getPosts().subscribe(po=>{
      this.posts = po;
    });
    this.subscription = this.blogService.postsChanged
    .subscribe(
      (posts: IPost[]) => {
        this.posts = posts;
      }
    );
  }
  onEditItem(index: number) {
    this.blogService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
