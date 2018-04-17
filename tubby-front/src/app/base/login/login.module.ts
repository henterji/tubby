import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessagesModule, ButtonModule, PanelModule, InputTextModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    RouterModule,
    MessagesModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    SharedModule,
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule {
}
