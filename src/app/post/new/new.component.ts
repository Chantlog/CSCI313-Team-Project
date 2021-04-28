import { getLocaleTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {


  constructor(private postService:PostService, private router : Router) { }
  ngOnInit(): void {
    
  }


  newPost: Post = {
    id: -1,
    title: "",
    imagelink: "",
    timestamp: new Date
  }
 

  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
  });

  



  onSubmit(){

    this.newPost.title = this.postForm.get('title')!.value;
    this.newPost.imagelink = this.postForm.get('imageUrl')!.value;
    this.newPost.timestamp = new Date();

    this.postForm.reset();
    this.postService.addPost(this.newPost);
    
    this.router.navigateByUrl('/');

  }



}
