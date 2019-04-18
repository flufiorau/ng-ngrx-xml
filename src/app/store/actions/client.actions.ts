import {Action} from '@ngrx/store';
import {IClient} from '../../models/client.interface';

export enum EClientActions {
  GetClients = '[Client] Get Clients',
  GetClientsSuccess = '[Client] Get Clients Success',
  GetClient = '[Client] Get Client',
  GetClientSuccess = '[Client] Get Client Success',
  GetSearchClients = '[Client] Get Search Client',
  GetSearchClientSuccess = '[Client] Get Search Client Success',
  ClearSearchClientSuccess = '[Client] Clear Search Client Success'
}

export class GetClients implements Action {
  public readonly type = EClientActions.GetClients;
}

export class GetClientsSuccess implements Action {
  public readonly type = EClientActions.GetClientsSuccess;

  constructor(public payload: Array<IClient>) {
  }
}

export class GetClient implements Action {
  public readonly type = EClientActions.GetClient;

  constructor(public payload: number) {
  }
}

export class GetClientSuccess implements Action {
  public readonly type = EClientActions.GetClientSuccess;

  constructor(public payload: IClient) {
  }
}

export class GetSearchClients implements Action {
  public readonly type = EClientActions.GetSearchClients;
  constructor(public payload: string) {
  }
}

export class GetSearchClientSuccess implements Action {
  public readonly type = EClientActions.GetSearchClientSuccess;
  constructor(public payload: Array<IClient>) {
  }
}

export class ClearSearchClientSuccess implements Action {
  public readonly type = EClientActions.ClearSearchClientSuccess;
}


export type ClientActions =
  | GetClients
  | GetClientsSuccess
  | GetClient
  | GetClientSuccess
  | GetSearchClients
  | GetSearchClientSuccess
  | ClearSearchClientSuccess;
