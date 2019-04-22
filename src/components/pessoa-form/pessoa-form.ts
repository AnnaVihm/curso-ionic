import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the PessoaFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pessoa-form',
  templateUrl: 'pessoa-form.html'
})
export class PessoaFormComponent {

  text: string;

  constructor(private viewCtrl : ViewController) {
    console.log('Hello PessoaFormComponent Component');
    this.text = 'Hello World';
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
