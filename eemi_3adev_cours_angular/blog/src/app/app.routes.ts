import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'post/:id', component: PostComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);