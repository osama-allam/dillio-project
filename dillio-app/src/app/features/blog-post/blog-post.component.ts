import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/_models/post';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
posts: post[];
  constructor() { }

  ngOnInit() {
    this.posts=[
      { postName: 'Post1' ,name: 'Admin' , description: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.' ,commentNumber: 4 , date: 22-4-2019 ,imageUrl: '../../../../assets/images/blog-banner/1.jpg'},
      { postName: 'Post2' ,name: 'Member' , description: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.' ,commentNumber: 5 , date: 22-4-2019 ,imageUrl: '../../../../assets/images/blog-banner/2.jpg'},
      { postName: 'Post3' ,name: 'Admin' , description: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.' ,commentNumber: 8 , date: 22-4-2019 ,imageUrl: '../../../../assets/images/blog-banner/3.jpg'},
      { postName: 'Post4' ,name: 'Member' , description: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.' ,commentNumber: 9 , date: 22-4-2019 ,imageUrl: '../../../../assets/images/blog-banner/6.jpg'},
      { postName: 'Post5' ,name: 'Admin' , description: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.' ,commentNumber: 10 , date: 22-4-2019 ,imageUrl: '../../../../assets/images/blog-banner/5.jpg'},
      { postName: 'Post6' ,name: 'Member' , description: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.' ,commentNumber: 20 , date: 22-4-2019 ,imageUrl: '../../../../assets/images/blog-banner/6.jpg'},
      { postName: 'Post7' ,name: 'Admin' , description: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.' ,commentNumber: 9 , date: 22-4-2019 ,imageUrl: '../../../../assets/images/blog-banner/2.jpg'},
      { postName: 'Post8' ,name: 'Member' , description: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.' ,commentNumber: 2 , date: 22-4-2019 ,imageUrl: '../../../../assets/images/blog-banner/1.jpg'}

    ]
  }

}
