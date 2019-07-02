import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';

const config = {
    apiKey: 'AIzaSyBaiHg5itd23mOrWJLF1WS49o9wxkOqjZM',
    authDomain: 'tchat-9ba4f.firebaseapp.com',
    databaseURL: 'https://tchat-9ba4f.firebaseio.com',
    projectId: 'tchat-9ba4f',
    storageBucket: '',
    messagingSenderId: '504325029156',
    appId: '1:504325029156:web:5199ee4360cc2684'
};

@NgModule({
  declarations: [AppComponent, ChatComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
