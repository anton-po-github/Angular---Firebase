import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AuthDatabaseService } from '../auth-Database.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})

export class UserLoginComponent {

  usernameText: string;
  usernameAvailable: boolean;

  constructor(public auth: AuthDatabaseService) { }

  checkUsername() {
  /*  this.auth.checkUsername(this.usernameText).subscribe(username => {
      this.usernameAvailable = !username.$value
    })*/
  }

  updateUsername() {
    this.auth.updateUsername(this.usernameText)
  }
  signInWithGoogle() {
    this.auth.googleLogin()
  }

}
