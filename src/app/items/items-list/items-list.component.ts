import { Component, OnInit } from '@angular/core';

import { Item } from '../shared/item';

import { ItemService } from '../shared/item.service';

import {  AngularFireDatabase,
          FirebaseListObservable,
          FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import {  AngularFirestore,
          AngularFirestoreCollection,
          AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'
import { Upload } from '../shared/upload';
import * as _ from 'lodash';
import { UploadService } from '../shared/upload.service';

/*interface Post {
  title: string,
  content: string
}*/


interface Post {
  title: string,
  content: string
  age: Array<any>
}

interface PostId extends Post {
  id: string;
}

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})

export class ItemsListComponent implements OnInit {

  selectedFiles: FileList;
  selectedFiles2: FileList;
  currentUpload: Upload;

  public item: FirebaseObjectObservable<Item[]>;
  public items: FirebaseListObservable<Item[]>;

  title: string;
  content: string;
  pathImage: string;
  filters = {};
  age = [];
  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  postsCol: AngularFirestoreCollection<Post>;
 // posts: Observable<Post[]>;
  posts: any;
  imageArray: any;

  dataPost: Observable<any>;

  constructor(private itemSvc: ItemService,
              private db: AngularFireDatabase,
              private afs: AngularFirestore,
              private upSvc: UploadService) {
  }
  ngOnInit() {
    this.postsCol = this.afs.collection('posts');

    /*this.afs.collection('post')
      .valueChanges()
      .subscribe(
        data => console.log(data)
      );*/

    // ID magic !!!!
    this.afs.collection('post')
      .snapshotChanges()
      .map(docArray => {
       return docArray.map((doc => {
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data()
          }
        }))
      })
      .subscribe(data => {
        console.log(data)
      });

  //  this.postsCol = this.afs.collection('posts',
    // ref => ref.where('title', '==', 'coursetro'));
   // this.posts = this.postsCol.valueChanges();

    this.posts = this.postsCol.snapshotChanges()
      .map((action) => {
      return action.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return{ id, data }
      })
      });


    this.items = this.itemSvc.getItemsList({limitToLast: 10});


    this.db.list('/uploads')
      .subscribe(image => {
      //  console.log(image)
       // console.log(image[0].url)
        this.imageArray = image;
        console.log(this.imageArray)
      });

   /* this.db.list('/uploads')
      .subscribe(image => {
      //  console.log(image)
       // console.log(image[0].url)
        this.pathImage = image[0].url;
      });*/

  }

  deleteItems() {
    this.itemSvc.deleteAll()
  }

  addPost() {
    this.afs.collection('posts').add({'title': this.title, 'content': this.content, 'age': [this.age] })
    this.title = null;
    this.content = null;
    this.age = null;
   // this.afs.collection('posts').doc('my-custom-id').set({'title': this.title, 'content': this.content })
  }

  getPostFstore(postId) {
   // console.log(postId)
    this.postDoc = this.afs.doc('posts/' + postId);
    this.post = this.postDoc.valueChanges();
    console.log(this.post)
  }

  deletePostFstore(postId) {
    this.afs.doc('posts/' + postId).delete();
  }


  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }
  uploadSingle() {
    const file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload);

    this.pathImage = this.upSvc.imagePath;
    console.log(this.pathImage)
  }
  uploadMulti() {
    const files = this.selectedFiles;
    const filesIndex = _.range(files.length);
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(files[idx]);
      this.upSvc.pushUpload(this.currentUpload)}
    )
  }

  deleteImage(item) {
    console.log(item);
    this.upSvc.deleteUpload(item)
  }
}
