import { ActionReducerMap } from '@ngrx/store';
import { pizzaReducer } from './pizza.reducer';
export const reducers: ActionReducerMap<any> = {
  pizza: pizzaReducer
};
