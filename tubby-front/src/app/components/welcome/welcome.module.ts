import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    ButtonModule
  ],
  declarations: [
    WelcomeComponent,
  ],
  exports: [
    WelcomeComponent,
  ]
})
export class WelcomeModule {
}
