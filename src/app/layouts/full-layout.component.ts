import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  constructor(private afa: AngularFireAuth,
              private router: Router) {}

  ngOnInit(): void {}

  logOut() {
    this.afa.auth.signOut()
      .then(
        (resp) => {
            this.router.navigate(['signin'])
        }
      )
      .catch(error => console.error('Error signOut', error))
  }

}
