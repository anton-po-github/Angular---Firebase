import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AuthService } from './auth.service';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class PostService {

  userRoles: Array<string>; // roles of currently logged in uer

  constructor(private auth: AuthService,
              private db: AngularFireDatabase) {
    auth.user.map(user => {
      /// Set an array of user roles, ie ['admin', 'author', ...]
      return this.userRoles = _.keys(_.get(user, 'roles'))
    }).subscribe()
  }
  /// Get Data
  getPosts() {
    return this.db.list('posts')
  }
  getPost(key) {
    return this.db.object('posts/' + key)
  }
  ///// Authorization Logic /////
  get canRead(): boolean {
    const allowed = ['admin', 'author', 'reader'];
    return this.matchingRole(allowed)
  }
  get canEdit(): boolean {
    const allowed = ['admin', 'author'];
    return this.matchingRole(allowed)
  }
  get canDelete(): boolean {
    const allowed = ['admin'];
    return this.matchingRole(allowed)
  }
  /// Helper to determine if any matching roles exist
  private matchingRole(allowedRoles): boolean {
    return !_.isEmpty(_.intersection(allowedRoles, this.userRoles))
  }
  //// User Actions
  editPost(post, newData) {
    if ( this.canEdit ) {
   //  return this.db.object('posts/' + post.$key).update(newData)
      return this.db.object('posts/' + post).update(newData)
    } else {console.log('action prevented!')}
  }
  deletePost(key) {
    if ( this.canDelete ) {
      return this.db.list('posts/' + key).remove()
    } else {
      window.alert('action prevented!');
     // console.log('action prevented!')
    }
  }
 /* get canEdit(): boolean {
    const allowed = ['admin', 'author'];
    return this.matchingRole(allowed)
  }
/// Determine if any matching roles exist
  private matchingRole(allowedRoles): boolean {
    return !_.isEmpty(_.intersection(allowedRoles, this.userRoles))
  }*/
}
