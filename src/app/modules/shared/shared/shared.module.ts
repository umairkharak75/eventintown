import { EventDetailsComponent } from './../../main-dashboard/components/event-details/event-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatChipsModule} from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from "ngx-spinner";
import { SearchFilterComponent } from './components/search-filter/search-filter.component';


@NgModule({
  declarations: [SearchFilterComponent,ArtistCardComponent,EventDetailsComponent, EventCardComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule
    
    

  ],
  exports:[SearchFilterComponent,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    MatCardModule,ArtistCardComponent,
    EventCardComponent]
})
export class SharedModule { }
