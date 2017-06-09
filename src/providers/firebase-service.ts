import {AngularFireDatabase} from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Injectable()
export class FirebaseService {

  constructor(public afd: AngularFireDatabase) { }
  //funcoes para conecta no banco de dados
  getListItems() {
    return this.afd.list('/listItems/');
  }

  addItem(name) {
    return this.afd.list('/listItems/').push(name);
  }

  removeItem(id) {
    return this.afd.list('/listItems/').remove(id);

  }

}
