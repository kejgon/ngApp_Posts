import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from './post.model';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  enteredTitle = "";
  enteredContent = "";
  @Output() postCreated = new EventEmitter<Post>();


  getTheInput() {
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    }
    this.postCreated.emit(post)
  }
}
