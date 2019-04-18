import {IAppState} from '../state/app.state';
import {createSelector} from '@ngrx/store';
import {IClientState} from '../state/client.state';

const selectClients = (state: IAppState) => state.clients;

export const selectClientList = createSelector(
  selectClients,
  (state: IClientState) => state.clients
);

export const selectSearchClientList = createSelector(
  selectClients,
  (state: IClientState) => state.searchClients
);

export const selectSelectedClient = createSelector(
  selectClients,
  (state: IClientState) => state.selectedClient
);
