import {Component, OnInit} from '@angular/core';
import {IClient} from '../../models/client.interface';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectSelectedClient} from '../../store/selectors/client.selector';
import {IAppState} from '../../store/state/app.state';

@Component({
  selector: 'app-client-detailed',
  templateUrl: './client-detailed.component.html',
  styleUrls: ['./client-detailed.component.css']
})
export class ClientDetailedComponent implements OnInit {

  _selectedClient$: Observable<IClient> = this._store.pipe(select(selectSelectedClient));
  selectedClient: IClient;

  constructor(private _store: Store<IAppState>) {
  }

  ngOnInit() {
    this._selectedClient$.subscribe((obj) => this.selectedClient = obj);
  }

}
