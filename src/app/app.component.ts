import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {GetClients} from './store/actions/client.actions';
import {Store} from '@ngrx/store';
import {IAppState} from './store/state/app.state';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ng-ngrx-xml';
  mobileQuery: MediaQueryList;
  _mobileQueryListener: () => void;
  sidenavOpened = true;

  constructor(
    private _store: Store<IAppState>,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this._store.dispatch(new GetClients());
  }

}
