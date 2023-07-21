import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario= this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    });
  constructor(private fb: FormBuilder, private auth: AuthService,
    public alertCtrl: AlertController,
    private router: Router) { }

  ngOnInit() {
  }
  login(){
    const email = this.usuario.get('email')?.value; // Obtener el valor del campo email del formulario
  const password = this.usuario.get('password')?.value; // Obtener el valor del campo password del formulario

  if (email && password) { 
    this.auth.loginUser(email, password).then( result => {
      this.router.navigate(['/tabs']);
    }).catch(err=>{
    this.alertCtrl.create({
    header: 'Error',
    subHeader: err.message,
    buttons: ['Aceptar']
    }).then(alert=>{
    alert.present();
    });
    });
    }}
    signin(){
      //el valor this.usuario.value.email puede ser del tipo string, null o undefined, y la función loginUser() del servicio AuthService esta esperando un valor de tipo string para el email.Tenemos que asegurarnos de que el formulario se haya inicializado correctamente y que email tenga un valor de tipo string. 

      const email = this.usuario.get('email')?.value; // Obtener el valor del campo email del formulario
  const password = this.usuario.get('password')?.value; // Obtener el valor del campo password del formulario

  if (email && password){
      this.auth.registerUser(email, password).then( result => {
        this.router.navigate(['/tabs']);
      }).catch(err=>{
      this.alertCtrl.create({
      header: 'Error',
      subHeader: err.message,
      buttons: ['Aceptar']
      }).then(alert=>{
      alert.present();
      });
      });
      }}
}
