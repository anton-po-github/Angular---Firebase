import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/post.model';

import * as PostActions from '../actions/post.actions';

import * as actions from '../actions/pizza.actions';
import * as fromPizza from '../reducers/pizza.reducer';

/*interface AppState {
  message: string;
}*/

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-ng-rx-view',
  templateUrl: './ng-rx-view.component.html',
  styleUrls: ['./ng-rx-view.component.scss']
})
export class NgRxViewComponent implements OnInit {

 /* message$: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message')
  }
  spanishMessage() {
    this.store.dispatch({type: 'SPANISH'})
  }
  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'})
  }*/


 /* post: Observable<Post>;
  text: string; /// form input val
  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post')
  }
  editText() {
    this.store.dispatch(new PostActions.EditText(this.text) )
  }
  resetPost() {
    this.store.dispatch(new PostActions.Reset())
  }
  upvote() {
    this.store.dispatch(new PostActions.Upvote())
  }
  downvote() {
    this.store.dispatch(new PostActions.Downvote())
  }*/

  pizzas: Observable<any>;
  constructor(private store: Store<fromPizza.State>) { }

  ngOnInit() {
    this.pizzas = this.store.select(fromPizza.selectAll)
  }

  createPizza() {
    const pizza: fromPizza.Pizza = {
      id: new Date().getUTCMilliseconds().toString(),
      size: 'small'
    };
    this.store.dispatch( new actions.Create(pizza) )
    const bbb = {name: 'Me'}
    const www = {...bbb, pizza}
    console.log(www)
    console.log(pizza)
  }

  updatePizza(id, size) {
    this.store.dispatch( new actions.Update(id, { size: size }) )
  }

  deletePizza(id) {
    this.store.dispatch( new actions.Delete(id) )
  }
}
