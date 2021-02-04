import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { HomeSearchComponent } from './components/home-search/home-search.component';
import { MainDashboardComponent } from './main-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path:'dashboard' ,component:HomeSearchComponent
 },
{path:'events/:name' ,component:EventDetailsComponent },


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainDashboardRoutingModule { }
