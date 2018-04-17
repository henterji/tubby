import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule, InputTextModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ButtonModule,
    InputTextModule,
  ],
  declarations: [
    ProfileComponent,
  ],
  exports: [
    ProfileComponent,
  ]
})
export class ProfileModule {
}
