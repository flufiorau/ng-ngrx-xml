import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ClientService} from '../../services/client.service';
import {IAppState} from '../state/app.state';
import {select, Store} from '@ngrx/store';
import {
  ClearSearchClientSuccess,
  EClientActions,
  GetClient,
  GetClients,
  GetClientsSuccess,
  GetClientSuccess,
  GetSearchClients,
  GetSearchClientSuccess
} from '../actions/client.actions';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {selectClientList} from '../selectors/client.selector';
import {of} from 'rxjs';
import {IClient, IHttpClient} from '../../models/client.interface';

@Injectable()
export class ClientEffects {
  @Effect()
  getClient$ = this._actions$.pipe(
    ofType<GetClient>(EClientActions.GetClient),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectClientList))),
    switchMap(([id, clients]) => {
      const selectedClient = clients.filter(client => client.id === +id)[0];
      return of(new GetClientSuccess(selectedClient));
    })
  );
  @Effect()
  getSearchClients$ = this._actions$.pipe(
    ofType<GetSearchClients>(EClientActions.GetSearchClients),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectClientList))),
    switchMap(([str, clients]) => {
      let result;
      if (str.length) {
        const searchClients = clients.filter(client => {
          if (this.clientFieldsHasStr(str, client.fields)) {
            return client;
          }
        });
        result = new GetSearchClientSuccess(searchClients);
      } else {
        result = new ClearSearchClientSuccess();
      }
      return of(result);
    })
  );
  @Effect()
  getClients$ = this._actions$.pipe(
    ofType<GetClients>(EClientActions.GetClients),
    switchMap(() => this._clientService.getClients()),
    switchMap((arrayIClient: Array<IClient>) => of(new GetClientsSuccess(arrayIClient)))
  );

  constructor(
    private _clientService: ClientService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {
  }

  private clientFieldsHasStr(str: string, clientFields: IHttpClient): boolean {
    let result = false;
    const scannerOfObj = (obj) => {
      for (const k in obj) {
        if (typeof obj[k] === 'object') {
          result = scannerOfObj(obj[k]);
        } else if (obj[k].toLowerCase().indexOf(str.toLowerCase()) !== -1) {
          return true;
        }
      }
      return result;
    };
    return scannerOfObj(clientFields);
  }
}
