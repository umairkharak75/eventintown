import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './modules/layout/layout.module';
import { MainDashboardModule } from './modules/main-dashboard/main-dashboard.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { share } from 'rxjs/operators';
import { CoreModule } from './modules/core/core.module';
import { ArtistCardComponent } from './modules/shared/shared/components/artist-card/artist-card.component';

@NgModule({
  declarations: [
    AppComponent,
  
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MainDashboardModule,
    RouterModule,
    AppRoutingModule,
    CoreModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
