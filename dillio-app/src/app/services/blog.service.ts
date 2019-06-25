import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { IPost } from 'src/app/_models/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  postsChanged = new Subject<IPost[]>();
  startedEditing = new Subject<number>();
private posts: IPost[];
  constructor() {
      this.posts=[
          { id: 1 ,postName: 'Post1' ,name: 'Admin' , description: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.' ,commentNumber: 4 , date: 22-4-2019 ,imageUrls: ['../../../../assets/images/blog-banner/1.jpg']},
          { id: 2 ,postName: 'Post2' ,name: 'Member' , description: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.' ,commentNumber: 5 , date: 22-4-2019 ,imageUrls: ['../../../../assets/images/blog-banner/2.jpg']},
          { id: 3 ,postName: 'Post3' ,name: 'Admin' , description: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.' ,commentNumber: 8 , date: 22-4-2019 ,imageUrls: ['../../../../assets/images/blog-banner/3.jpg']},
          { id: 4 ,postName: 'Post4' ,name: 'Member' , description: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.' ,commentNumber: 9 , date: 22-4-2019 ,imageUrls: ['../../../../assets/images/blog-banner/5.jpg']},
          { id: 5 ,postName: 'Post5' ,name: 'Admin' , description: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.' ,commentNumber: 10 , date: 22-4-2019 ,imageUrls: ['../../../../assets/images/blog-banner/6.jpg']},
          { id: 6 ,postName: 'Post6' ,name: 'Member' , description: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.' ,commentNumber: 20 , date: 22-4-2019 ,imageUrls: ['../../../../assets/images/blog-banner/2.jpg']},
          { id: 7 ,postName: 'Post7' ,name: 'Admin' , description: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.' ,commentNumber: 9 , date: 22-4-2019 ,imageUrls: ['../../../../assets/images/blog-banner/3.jpg']},
          { id: 8 ,postName: 'Post8' ,name: 'Member' , description: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.' ,commentNumber: 2 , date: 22-4-2019 ,imageUrls: ['../../../../assets/images/blog-banner/5.jpg']}

        ];
  }
  getPosts() {
      return this.posts;
    }
  getPost(index: number) {
      return this.posts[index];
    }

    addPost(posts: IPost) {

      this.posts.push(posts);
      console.log(this.posts);
      this.postsChanged.next(this.posts);
    }

    addPosts(posts: IPost[]) {
      this.posts.push(...posts);
      this.postsChanged.next(this.posts.slice());
    }

    updatePost(index: number, newPost: IPost) {
      this.posts[index] = newPost;
      this.postsChanged.next(this.posts.slice());
    }

    deletePost(index: number) {
      this.posts.splice(index, 1);
      this.postsChanged.next(this.posts.slice());
    }
}
