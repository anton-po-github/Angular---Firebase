import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';

import { User } from './user';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  user: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              private router: Router) {
    this.afAuth.authState
      .switchMap(auth => {
        if (auth) {
          /// signed in
        return this.db.object('users/' + auth.uid)
        } else {
          /// not signed in
          return Observable.of(null)
        }
      })
      .subscribe(user => {
        console.log(user);
        this.user.next(user);
      })
  }

  ///// SignIn - SignOut Process /////
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log(provider);
    return this.afAuth.auth.signInWithPopup(provider)
      .then(credential =>  {
        console.log(credential.user);
        this.updateUser(credential.user);
        this.router.navigate(['dashboard'])
      }).
      catch(error => console.log(error))
  }

  signOut() {
    this.afAuth.auth.signOut()
  }
  //// Update user data ////
  /// updates database with user info after login
  /// only runs if user role is not already defined in database
  public updateUser(authData) {
    const userData = new User(authData);
    const ref = this.db.object('users/' + authData.uid);
   // console.log(ref)
    ref.take(1)
      .subscribe(user => {
        if (!user.role) {
          ref.update(userData)
        }
      })
  }
}
