import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-exemple2',
  templateUrl: 'exemple2.html',
})
export class Exemple2Page {

  items: Array<{ title: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [];
    this.items.push({ title: "DD" });
    this.items.push({ title: "EE" });
    this.items.push({ title: "FF" });
    this.items.push({ title: "GG" });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Exemple2Page');
  }

}
