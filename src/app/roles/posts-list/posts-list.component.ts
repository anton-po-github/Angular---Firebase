import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  public posts: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase,
              private postSvc: PostService) { }

  ngOnInit() {
    this.posts = this.postSvc.getPosts();
    console.log(this.posts);
  }

}
