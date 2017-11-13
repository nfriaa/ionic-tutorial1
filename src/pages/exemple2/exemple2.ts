import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from "ionic-angular";

@IonicPage()
@Component({
  selector: 'page-exemple2',
  templateUrl: 'exemple2.html',
})
export class Exemple2Page {

  items: Array<{ title: string }>;

  sports: Array<{title: string, note: string, icon: string}>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {

    this.items = [];
    this.items.push({ title: "DD" });
    this.items.push({ title: "EE" });
    this.items.push({ title: "FF" });
    this.items.push({ title: "GG" });

    this.sports = [];
    this.sports.push({title: "Flask", icon: "flask", note: "Une note sur flask..."});
    this.sports.push({title: "Wifi", icon: "wifi", note: "Une note sur wifi..."});
    this.sports.push({title: "Beer", icon: "beer", note: "Une note sur beer..."});
    this.sports.push({title: "Football", icon: "football", note: "Une note sur football..."});
    this.sports.push({title: "Basketball", icon: "basketball", note: "Une note sur basketball..."});
    this.sports.push({title: "Paper plane", icon: "paper-plane", note: "Une note sur paper-plane..."});
    this.sports.push({title: "American football", icon: "american-football", note: "Une note sur american-football..."});
    this.sports.push({title: "Boat", icon: "boat", note: "Une note sur boat..."});
    this.sports.push({title: "Bluetooth", icon: "bluetooth", note: "Une note sur bluetooth..."});
    this.sports.push({title: "Build", icon: "build", note: "Une note sur build..."});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Exemple2Page');
  }

  itemsTapped(event, item) {
    console.log("clic sur l'item : " + item.title);
  }

  sportsTapped(event, item) {
    console.log("clic sur l'item => title:" + item.title + " icon:" + item.icon + " note:" + item.note);

    let alert = this.alertCtrl.create({
      title: item.title,
      subTitle:
      "clic sur l'item => <br/>title:" + item.title + " <br/>icon:" + item.icon + " <br/>note:" + item.note,
      buttons: ["OK"]
    });
    alert.present();

  }

}
