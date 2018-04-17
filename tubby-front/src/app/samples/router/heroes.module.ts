import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonModule, PanelModule, InputTextModule } from 'primeng/primeng';

import { SharedModule } from '../../shared/shared.module';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './shared/hero.service';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'detail/:id', component: HeroDetailComponent },
      { path: 'list', component: HeroListComponent }
    ]
  }
];

@NgModule({
  imports: [
    ButtonModule, PanelModule, InputTextModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroListComponent
  ],
  exports: [
    HeroesComponent
  ],
  providers: [HeroService],
})
export class HeroesModule { }
