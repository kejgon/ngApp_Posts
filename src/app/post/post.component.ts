import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from './post.model';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  enteredTitle = "";
  enteredContent = "";
  @Output() postCreated = new EventEmitter<Post>();


  onAddPost(form: NgForm) {
    if (form.invalid) {
      return
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    }
    this.postCreated.emit(post)
  }
}
