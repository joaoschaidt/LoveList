import { FirebaseService } from './../../providers/firebase-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listaItens: FirebaseListObservable<any[]>;
  newItem = '';

  constructor(public navCtrl: NavController, public firebaseSerice: FirebaseService) {
    this.listaItens = this.firebaseSerice.getListItems();
  }

  addItem() {
    this.firebaseSerice.addItem(this.newItem);
  }

  removeItem(id) {
    this.firebaseSerice.removeItem(id);
  }
}
