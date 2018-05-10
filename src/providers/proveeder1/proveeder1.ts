import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the Proveeder1Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Proveeder1Provider {

  constructor(public http: HttpClient) {
    console.log('Hello Proveeder1Provider Provider');
  }
  getStoreData() {
    // remote test
    // let url = 'https://odd-fish-100.localtunnel.me/'
    // return this.http.get(url)

    // local test
    return this.http.get('https://foolish-fireant-8.localtunnel.me/api/v1/stores/')
  }
}
