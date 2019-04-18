import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ClientsListComponent} from './components/clients-list/clients-list.component';
import {ClientsSearchComponent} from './components/clients-search/clients-search.component';
import {ClientDetailedComponent} from './components/client-detailed/client-detailed.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {appReducers} from './store/reducers/app.reducers';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ClientEffects} from './store/effects/client.effects';

@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    ClientsSearchComponent,
    ClientDetailedComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ClientEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
