import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { postService } from '../post.service';
import { IPost } from 'src/app/_models/post';

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




@Input() post: IPost;
  constructor(private postService: postService) { 
     this.post={};
  }

  ngOnInit() {
  }
  onSave(form: NgForm)
  {
    // const value = form.value;
    // const newPost = new IPost(value.postName, value.description);
    // if (this.editMode) {
    //   this.postService.updatePost(this.editedItemIndex, newPost);
    // } else {
    //   this.postService.addPost(newPost);
    // }
    // this.editMode = false;
    // form.reset();
    console.log(form);
  }
}
