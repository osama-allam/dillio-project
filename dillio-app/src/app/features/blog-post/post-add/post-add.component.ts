import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { IPost } from 'src/app/_models/post';
import { BlogService } from 'src/app/services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  @ViewChild('f') postForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: IPost;
  formData: IPost;



post: IPost;
  constructor(private blogService: BlogService,private router: Router) { 
     this.post={};
  }

  ngOnInit() {
    
    this.subscription = this.blogService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
         this.blogService.getPost(index).subscribe((po) =>{
          this.editedItem =po;
        },
        (error)=> console.log(error));
        this.postForm.setValue({
          postName: this.editedItem.postName,
          description: this.editedItem.description,
          date:this.editedItem.date
        })
      }
    );
  }
  onSave(form: NgForm)
  {
    const value = form.value;
    const newPost = Object.assign({},this.post);
    this.formData = newPost; 
      // this.post={
      //   postName:newPost.postName,
      //   description:newPost.description,
      //   date:newPost.date
      // }
    
      this.blogService.addPost(this.formData).subscribe(
        (res) => {
          this.router.navigate(['/blog/listing']);
        },
        (error)=>{
          console.error(error);
        }
      )
      var poooo = this.blogService.getPosts();


      
    // }
    // this.editMode = false;
    // form.reset();

    console.log(form , "save");
    console.log( newPost , "add");

  }
}
