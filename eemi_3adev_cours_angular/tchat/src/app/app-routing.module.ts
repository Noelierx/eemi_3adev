import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Required components for which route services to be activated
import { SignInComponent } from './signin/signin.component';
import {DatatestComponent} from './datatest/datatest.component';


// Include route guard in routes array
const routes: Routes = [
    { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
    { path: 'sign-in', component: SignInComponent},
    { path: '', redirectTo: '/datatest', pathMatch: 'full'},
    { path: 'datatest', component: DatatestComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }