import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '../../roles/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  userName;
  userPassword;

  constructor(private aFA: AngularFireAuth,
              private router: Router,
              private authSvc: AuthService) { }

  ngOnInit() {
   // console.log(this.aFA.authState.subscribe(resp => console.log(resp)));
   // console.log(this.aFA.app.options);
  }


  signIn() {
  //  this.authSvc.googleLogin();
    console.log(this.userName, this.userPassword)
    this.aFA.auth.signInWithEmailAndPassword(this.userName, this.userPassword)
      .then(
        (authState) => {
          if (authState.o) {
            console.log(authState);
            this.authSvc.updateUser(authState);
            this.router.navigate(['dashboard'])
          }
        }
      )
      .catch(error => console.error('Error signin ', error));
  }
}
