import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './signin/signin.component';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// AuthService
import {AuthService} from './services/auth.service';
import { DatatestComponent } from './datatest/datatest.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DatatestComponent,
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFirestoreModule,
    ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
