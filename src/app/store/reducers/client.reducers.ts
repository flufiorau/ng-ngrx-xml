import {IClientState, initialClientState} from '../state/client.state';
import {ClientActions, EClientActions} from '../actions/client.actions';

export function clientReducers(
  state = initialClientState,
  action: ClientActions
): IClientState {
  switch (action.type) {
    case EClientActions.GetClientsSuccess: {
      return {
        ...state,
        clients: action.payload
      };
    }
    case EClientActions.GetClientSuccess: {
      return {
        ...state,
        selectedClient: action.payload
      };
    }
    case EClientActions.GetSearchClientSuccess: {
      return {
        ...state,
        searchClients: action.payload
      };
    }
    case EClientActions.ClearSearchClientSuccess: {
      return {
        ...state,
        searchClients: null
      };
    }

    default:
      return state;
  }
}
