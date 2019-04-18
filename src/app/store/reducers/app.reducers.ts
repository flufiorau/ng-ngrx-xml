import {ActionReducerMap} from '@ngrx/store';
import {IAppState} from '../state/app.state';
import {clientReducers} from './client.reducers';

export const appReducers: ActionReducerMap<IAppState> = {
  clients: clientReducers
};
