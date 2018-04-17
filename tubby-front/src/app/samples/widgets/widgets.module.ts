import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { WidgetsComponent } from './widgets.component';
import { CountUpDirective } from '../../shared/directives/countUp.directive';

const routes: Routes = [
  {
    path: '',
    component: WidgetsComponent
  },
];

@NgModule({
  imports: [
    SharedModule,
    ChartModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CountUpDirective,
    WidgetsComponent
  ]
})
export class WidgetsModule { }
