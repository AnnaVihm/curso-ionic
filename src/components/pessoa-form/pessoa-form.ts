import { Component, OnInit } from '@angular/core';
import { ViewController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalProvider } from '../../providers/moovie/global';

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
export class PessoaFormComponent implements OnInit {

  text: string;
  form: FormGroup;

  constructor(private viewCtrl : ViewController,
              private formBuild : FormBuilder,
              public loadingCtrl: LoadingController,
              public globalProvider : GlobalProvider ) {
  }

  ngOnInit(){
    this.setForm();
  }

  setForm(){
    this.form = this.formBuild.group({
      id:[null],
      nome:[null, Validators.required],
      cpf:[null, Validators.required],
      rg:[null],
      nascimento:[null, Validators.required],
      email:[null, Validators.compose([Validators.required, Validators.email])],
      fone:[null],
      cel:[null],
      endereco: this.formBuild.group({
        cep: null,
        endereco: null,
        numero: null,
        bairro: null,
        cidade: null,
        estado: null,
        longitude:null,
        latitude:null,
        logradouro:null
      })
    })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  create(value){
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
    });
    loader.present()
    this.globalProvider.createPessoa(value).subscribe(data => {
      if(data != null){
        loader.dismiss()
        this.dismiss()
      }
    })
      console.log(JSON.stringify(value))
  }
}
