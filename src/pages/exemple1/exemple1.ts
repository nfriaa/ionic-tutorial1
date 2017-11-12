import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from "ionic-angular";
import { ListPage } from '../list/list';

@IonicPage()
@Component({
  selector: 'page-exemple1',
  templateUrl: 'exemple1.html',
})
export class Exemple1Page {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Exemple1Page');
  }

  /**
   * Permet d'afficher une alerte.
   */
  doAlert() {
    let alert = this.alertCtrl.create({
      title: "Bravo !",
      subTitle:
        "Vous venez d'ouvrir une alerte avec Ionic !",
      buttons: ["OK"]
    });
    alert.present();
  }

  /**
   * Permet de naviguer vers une autre page.
   */
  goToOtherPage() {
    this.navCtrl.push(ListPage);
  }

}
