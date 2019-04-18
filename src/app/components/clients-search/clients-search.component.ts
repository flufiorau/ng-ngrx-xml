import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {IClient} from '../../models/client.interface';
import {GetSearchClients} from '../../store/actions/client.actions';
import {Store} from '@ngrx/store';
import {IAppState} from '../../store/state/app.state';

@Component({
  selector: 'app-clients-search',
  templateUrl: './clients-search.component.html',
  styleUrls: ['./clients-search.component.css']
})
export class ClientsSearchComponent implements OnInit {

  clients: Array<IClient> = [];
  clientSearchControl = new FormControl();

  startTimer: number;

  constructor(private _store: Store<IAppState>) {
  }

  ngOnInit() {
    this.clientSearchControl.valueChanges.subscribe(
      (event: string) => {
        this.getClientsBySearch(event);
      });
  }

  getClientsBySearch(value) {
    window.clearTimeout(this.startTimer);
    this.startTimer = setTimeout(() => this._store.dispatch(new GetSearchClients(value)), 300);
  }
}
