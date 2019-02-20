import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// Import des modules ANGULAR
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule , MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
// Import des icones ANGULAR
import { MatIconModule } from '@angular/material/icon';

// Import de HttpClientModule pour les requêtes Http
import { HttpClientModule } from '@angular/common/http';
// Import des components
import { PostComponent } from './post/post.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
// Creation des routes !
const appRoutes: Routes = [
  { path: '', redirectTo: 'post', pathMatch: 'full'  },
  { path: 'post', component: PostComponent , pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    DialogBoxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Import des Routes
    RouterModule.forRoot(
      appRoutes,
    ),
    // Import des composants Angular Material et autre
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
    FormsModule,
    RouterModule,
    MatDialogModule,
    MatTooltipModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  entryComponents : [
    DialogBoxComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
