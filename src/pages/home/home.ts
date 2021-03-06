import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact'; 
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  site = { 
    url: 'Teste firebase',
    descripton: 'Teste ionic 3 com firebase '
  }

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {

    this.db.list('site').push(this.site)
  }

  contato() {
    this.navCtrl.push(ContactPage);
  }

}
