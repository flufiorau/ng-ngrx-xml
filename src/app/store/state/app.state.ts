import {IClientState, initialClientState} from './client.state';

export interface IAppState {
  clients: IClientState;
}

export const initialAppState: IAppState = {
  clients: initialClientState
};

export function getInitialState(): IAppState {
  return initialAppState;
}

