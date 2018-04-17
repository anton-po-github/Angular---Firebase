import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userName;
  userPassword;

  constructor(private angularFireAuth: AngularFireAuth) { }

  ngOnInit() {

    /*const   signInSuccessUrl: 'localhost:4200',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: '<your-tos-url>'
    };
  */
      }

  createAccount() {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(this.userName, this.userPassword)
      .then(authState => console.log('Norm auth' + authState))
      .catch(error => console.log('Error auth' + error))
  }

}
