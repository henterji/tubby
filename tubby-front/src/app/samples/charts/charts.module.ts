import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/primeng';
import { ChartsService } from './charts.service';
import { SharedModule } from '../../shared/shared.module';
import { EchartsDirective } from '../../shared/directives';
import { ChartsComponent } from './charts.component';

const routes: Routes = [
  {
    path: '',
    component: ChartsComponent
  },
];

@NgModule({
  imports: [
    ChartModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ChartsComponent,
  ],
  exports: [
    ChartsComponent,
  ],
  providers: [
    ChartsService
  ]
})
export class ChartsModule {
}
