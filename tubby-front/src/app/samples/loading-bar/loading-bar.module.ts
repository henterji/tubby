import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { LoadingBarComponent } from './loading-bar.component';

const routes: Routes = [
  { path: '', component: LoadingBarComponent },
];

@NgModule({
  imports: [
    SharedModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoadingBarComponent
  ],
  exports: [
    LoadingBarComponent,
  ]
})
export class LoadingBarModule {
}
