import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItem(name: string): Observable<any>{
    var url=`https://api.mercadolibre.com/sites/MLU/search?q=${name}`;
    return this.http.get(url);
  }
}
