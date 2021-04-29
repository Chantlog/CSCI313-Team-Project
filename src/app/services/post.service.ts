import { Injectable } from '@angular/core';
import {Post} from '../models/post.model';
import {POSTS} from '../post-data/post-data'; //Temporary data set for testing


@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = POSTS;
  numIds: number = POSTS.length+1;
  //Get posts from database and store them in an array here.

  constructor() { }


  addPost(newPost: Post){
    newPost.id = newPost.timestamp?.getTime(); 
    this.posts.push(newPost);
  }

  deletePost(postIndex: number){
    this.posts.splice(postIndex,1);
  }

}
