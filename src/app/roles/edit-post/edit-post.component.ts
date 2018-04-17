import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})

export class EditPostComponent implements OnInit {

  id: number;

  content: string;
  titleText: string;
  constructor(private postSvc: PostService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params) => {
          this.id = params['id'];
        }
      );
    this.postSvc.getPost(this.id)
      .subscribe(
        (data => {
          this.titleText = data.title;
          this.content = data.content;
        })
      );
  }

  goEdit() {
    this.postSvc.editPost(this.id, {title: this.titleText, content: this.content});
    this.router.navigate(['/roles/posts'])
  }
}
