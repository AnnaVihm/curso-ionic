import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/moovie/global';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [GlobalProvider]
})
export class FeedPage {

  pessoas:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private globalProvider : GlobalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.getPessoa()
  }

  getPessoa(){
    this.globalProvider.findAllPessoa().subscribe(data => {
     this.pessoas = JSON.parse(data._body)
     console.log(this.pessoas)
    })
  }

}
