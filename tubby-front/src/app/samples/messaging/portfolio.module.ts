import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  InputTextModule,
  DataTableModule,
  ButtonModule,
  DialogModule,
  DropdownModule,
  MultiSelectModule,
  SliderModule,
  PaginatorModule
} from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { PortfolioService } from './portfolio.service';
import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  },
];

@NgModule({
  imports: [
    SharedModule,
    InputTextModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    MultiSelectModule,
    SliderModule,
    PaginatorModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PortfolioComponent,
  ],
  exports: [
    PortfolioComponent,
  ],
  providers: [PortfolioService]
})
export class PortfolioModule {
}

