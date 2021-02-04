import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainDashboardRoutingModule } from './main-dashboard-routing.module';
import { MainDashboardComponent } from './main-dashboard.component';
import { SharedModule } from '../shared/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { HomeSearchComponent } from './components/home-search/home-search.component';
import { ArtistService } from './serivice/artist.service';


@NgModule({
  declarations: [MainDashboardComponent,  HomeSearchComponent],
  imports: [
    CommonModule,
    MainDashboardRoutingModule,
    SharedModule,
    
    FlexLayoutModule.withConfig({} )

  ],
  providers: [ArtistService]
})
export class MainDashboardModule { }
