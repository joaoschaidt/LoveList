import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './../providers/firebase-service';

const firebaseConfig = {
    apiKey: "AIzaSyDlRg_7_6gBp1nFo9AXX4RJbhquUucaZTU",
    authDomain: "lovelist-6b406.firebaseapp.com",
    databaseURL: "https://lovelist-6b406.firebaseio.com",
    projectId: "lovelist-6b406",
    storageBucket: "lovelist-6b406.appspot.com",
    messagingSenderId: "57793676996"
  };

  @NgModule({
    declarations: [
      MyApp,
      HomePage
    ],
    imports: [
      BrowserModule,
      HttpModule,
      AngularFireDatabaseModule,
      AngularFireModule.initializeApp(firebaseConfig),
      IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
      MyApp,
      HomePage
    ],
    providers: [
      StatusBar,
      SplashScreen,
      FirebaseService,
      {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
  })
export class AppModule {}
