import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Proveeder1Provider } from '../../providers/proveeder1/proveeder1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  stores
  imageNum: integer = 3
  constructor(public navCtrl: NavController, public provider: Proveeder1Provider ) {}

  ionViewDidLoad(){
    this.provider.getStoreData()
    .subscribe(
      (data)=>{this.stores = data;},
      (error)=>{console.log(error);}
    )
  }
}
