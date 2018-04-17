import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  constructor(private authFB: AngularFireAuth) { }

}
