import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { PasswordComponent } from './password.component';

const routes: Routes = [
  { path: '', component: PasswordComponent },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ButtonModule,
  ],
  declarations: [
    PasswordComponent,
  ],
  exports: [
    PasswordComponent,
  ]
})
export class PasswordModule {
}
