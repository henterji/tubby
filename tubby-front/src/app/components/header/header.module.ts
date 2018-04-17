import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuModule, DropdownModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { SidebarToggleDirective } from '../../shared/directives/sidebar.directive';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    MenuModule,
    DropdownModule,
  ],
  declarations: [
    HeaderComponent,
    SidebarToggleDirective,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule {
}
