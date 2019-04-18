import {IClient} from '../../models/client.interface';

export interface IClientState {
  clients: Array<IClient>;
  selectedClient: IClient;
  searchClients: Array<IClient>;
}

export const initialClientState: IClientState = {
  clients: null,
  selectedClient: null,
  searchClients: null
};
