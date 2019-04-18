import {Component} from '@angular/core';
import {IClient} from '../../models/client.interface';
import {IAppState} from '../../store/state/app.state';
import {select, Store} from '@ngrx/store';
import {GetClient} from '../../store/actions/client.actions';
import {selectClientList, selectSearchClientList} from '../../store/selectors/client.selector';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent {

  clients: Observable<Array<IClient>> = this._store.pipe(select(selectClientList));
  searchClients: Observable<Array<IClient>> = this._store.pipe(select(selectSearchClientList));

  constructor(private _store: Store<IAppState>) {
  }

  showClientDetail(id) {
    this._store.dispatch(new GetClient(id));
  }
}
