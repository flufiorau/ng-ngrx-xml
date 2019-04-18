import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IClient, IHttpClient} from '../models/client.interface';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  clientsUrl = `${environment.apiUrl}assets/clients.json`;

  constructor(private _http: HttpClient) {
  }

  getClients(): Observable<Array<IClient>> {
    return this._http.get<Array<IHttpClient>>(this.clientsUrl).pipe(
      map((res: Array<IHttpClient>) => {
          return res.map((client: IHttpClient, ind: number): IClient => {
              return {id: ind, fields: client};
            }
          );
        }
      ),
      catchError((error: HttpErrorResponse) => {
        throw error;
      })
    );
  }
}
