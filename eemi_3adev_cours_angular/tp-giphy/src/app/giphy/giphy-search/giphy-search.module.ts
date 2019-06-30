import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphySearchComponent } from './giphy-search.component';
import { GiphySearchService } from '../giphy-search.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ GiphySearchComponent],
    exports: [GiphySearchComponent],
    imports: [ CommonModule, FormsModule ],
    providers: [GiphySearchService],
})
export class GiphySearchComponentModule {}
