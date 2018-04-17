import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgrxRoutingModule } from './ngrx-routing.module';
import { NgRxComponent } from './ng-rx.component';
import { NgRxViewComponent } from './ng-rx-view/ng-rx-view.component';
import { StoreModule } from '@ngrx/store';

import { simpleReducer } from './reducers/simple.reducer';
import { postReducer } from './reducers/post.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './reducers';
import { pizzaReducer } from './reducers/pizza.reducer';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgrxRoutingModule,
    StoreModule.forFeature('pizza', pizzaReducer),
   /* StoreModule.forRoot({
      post: postReducer, /// <--- add reducer here
      message: simpleReducer
    }),*/
    /*StoreDevtoolsModule.instrument({
      maxAge: 25 // number of states to retain
    })*/
     /*StoreModule.forRoot({message: simpleReducer})*/
  ],
  declarations: [
    NgRxComponent,
    NgRxViewComponent
  ],
  providers: [

  ]
})
export class NgrxModule { }
