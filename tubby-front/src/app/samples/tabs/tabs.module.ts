import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabViewModule, ButtonModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { TabsComponent } from './tabs.component';
import { FooComponent } from './foo.component';
import { BarComponent } from './bar.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent
  },
];

@NgModule({
  imports: [
    SharedModule,
    TabViewModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FooComponent,
    BarComponent,
    TabsComponent,
  ],
  exports: [
    FooComponent,
    BarComponent,
    TabsComponent,
  ],
  providers: []
})
export class TabsModule {
}

