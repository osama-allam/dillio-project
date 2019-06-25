import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { IPost } from 'src/app/_models/post';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { post } from 'selenium-webdriver/http';
import { catchError, map } from 'rxjs/operators';
import { HeaderRowOutlet } from '@angular/cdk/table';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl = environment.apiUrl;


  postsChanged = new Subject<IPost[]>();
  startedEditing = new Subject<number>();
private posts: IPost[];
  constructor(private http: HttpClient) {
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
  getPosts():Observable<IPost[]> {
    return this.http.get<IPost[]>(this.baseUrl + 'post/');
    }
  getPost(id: number):Observable<IPost> {
    if(id === 0)
    {
      return of(this.initializePost());
    }
    return this.http.get<IPost>(this.baseUrl + 'post/' + id);
    }

    addPost(post: IPost): Observable<IPost> {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      return this.http.post<IPost>(this.baseUrl + 'post',post , {headers:headers})
      .pipe(
        catchError(this.handleError)
      );
    }

    updatePost(post: IPost):Observable<IPost> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
      return this.http.put<IPost>(this.baseUrl + 'post/'+post.id,  post , {headers: headers})
      .pipe(
        map(()=>post),
        catchError(this.handleError)
      )
    }

    private handleError(err) {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage: string;
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
    
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
      }
      console.error(err);
      return throwError(errorMessage);
    }
    initializePost(): IPost {
      return {
        id: 0,
        postName: null,
        name: null,
        commentNumber: null,
        description: null,
        date: null,
        imageUrls: []
      };
    }

}



// getPosts() {
//   return this.posts;
// }
// getPost(index: number) {
//   return this.posts[index];
// }

// addPost(posts: IPost) {

//   this.posts.push(posts);
//   console.log(this.posts);
//   this.postsChanged.next(this.posts);
// }

// addPosts(posts: IPost[]) {
//   this.posts.push(...posts);
//   this.postsChanged.next(this.posts.slice());
// }

// updatePost(index: number, newPost: IPost) {
//   this.posts[index] = newPost;
//   this.postsChanged.next(this.posts.slice());
// }

// deletePost(index: number) {
//   this.posts.splice(index, 1);
//   this.postsChanged.next(this.posts.slice());
// }
