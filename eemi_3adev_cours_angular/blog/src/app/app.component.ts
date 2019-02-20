import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Affichage des articles';
    lead = 'On veut afficher une liste de 100 articles';

    constructor() {

    }
}
