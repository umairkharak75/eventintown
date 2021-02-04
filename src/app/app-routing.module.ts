import { MainDashboardModule } from './modules/main-dashboard/main-dashboard.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
const routes: Routes = [{ path: '', component: AppComponent, 

children: [
  { path: '', redirectTo: 'dashboard',pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () =>
      import('./modules/main-dashboard/main-dashboard.module').then(
         (m) => m.MainDashboardModule
       ), },

      
 
]
},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
