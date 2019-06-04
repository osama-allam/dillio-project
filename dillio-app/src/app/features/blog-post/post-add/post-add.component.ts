import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';
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
    this.subscription = this.postService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.postService.getPost(index);
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
    // if (this.editMode) {
    //   this.postService.updatePost(this.editedItemIndex, newPost);
    // } else {
      this.postService.addPost(newPost);
      var poooo = this.postService.getPosts();
      debugger ;
    // }
    // this.editMode = false;
    // form.reset();

    console.log(form , "save");
    console.log( newPost , "add");

  }
}
