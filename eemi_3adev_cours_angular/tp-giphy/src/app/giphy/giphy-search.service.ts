import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class GiphySearchService {

    constructor(private http: HttpClient) {
    }

    findGif(limit: string, term: string) {
        const url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=xLKmAD5MfStWFldP0BJgGsZtmvLSllf7&limit=' + limit;
        return this.http.get(url);
    }
}
