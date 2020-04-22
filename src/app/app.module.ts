import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyD-i_ZB4dmsSU1boXnv3JB3AgkU15k1zXk",
  authDomain: "mychatapp-37e68.firebaseapp.com",
  databaseURL: "https://mychatapp-37e68.firebaseio.com",
  projectId: "mychatapp-37e68",
  storageBucket: "mychatapp-37e68.appspot.com",
  messagingSenderId: "349628282730",
  appId: "1:349628282730:web:beea370ef41c05368f5713"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

