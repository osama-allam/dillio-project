import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPost } from 'src/app/_models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 @Input() post: IPost;
 @Output() myEvent: EventEmitter<string>;
 
  constructor() { 

    this.myEvent = new EventEmitter<string>();
    
  }

  ngOnInit() {
  }
}
