import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})

export class SignInComponent implements OnInit {

    constructor(public authService: AuthService) { }

    ngOnInit() { }

}
