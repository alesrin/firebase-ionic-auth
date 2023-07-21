import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const firebaseConfig = {

  apiKey: "AIzaSyD5PJ8xKWSJ_wYTauEbqshNVg2v-qDGaW4",

  authDomain: "fir-ionic-671d0.firebaseapp.com",

  projectId: "fir-ionic-671d0",

  storageBucket: "fir-ionic-671d0.appspot.com",

  messagingSenderId: "745211727045",

  appId: "1:745211727045:web:7039a3d656112e876eb4ac"

};


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule, AngularFireAuthModule, ReactiveFormsModule, FormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
