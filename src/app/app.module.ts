import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

import { AngularFireModule } from 'angularfire2';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { StoreModule } from '@ngrx/store';
import { reducers } from './ng-rx/reducers/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgrxModule } from './ng-rx/ngrx.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

export const firebaseConfig = {
  apiKey: 'AIzaSyB5onZJbLPeSmj6UNbPV8K0e4uKMkogRT0',
  authDomain: 'perfect-jetty-178912.firebaseapp.com',
  databaseURL: 'https://perfect-jetty-178912.firebaseio.com',
  projectId: 'perfect-jetty-178912',
  storageBucket: 'perfect-jetty-178912.appspot.com',
  messagingSenderId: '473869326304'
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    NgrxModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // number of states to retain
    })
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective
  ],
  providers: [
    AngularFireAuth,
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
