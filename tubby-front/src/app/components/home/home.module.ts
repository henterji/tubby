import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    SharedModule,
    PanelModule,
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule {
}
