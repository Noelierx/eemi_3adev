import { Component, OnInit } from '@angular/core';
import { GiphySearchService } from '../giphy-search.service';

@Component({
    selector: 'app-giphy-search',
    templateUrl: './giphy-search.component.html'
})
export class GiphySearchComponent implements OnInit {

    gifs: any[] = [];

    limit: string;
    term: string;

    constructor(private giphySearchService: GiphySearchService) {
    }

    ngOnInit(): void { }

    findGif() {
        this.giphySearchService.findGif(this.limit, this.term)
            .subscribe((response: Response) => {
                this.gifs = response['data'];
            });
    }
}
