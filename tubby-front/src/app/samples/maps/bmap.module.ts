import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaiduMapModule } from 'angular2-baidu-map';
import { SharedModule } from '../../shared/shared.module';
import { BMapComponent } from './bmap.component';

const routes: Routes = [
  {
    path: '',
    component: BMapComponent
  },
];

@NgModule({
  imports: [
    SharedModule,
    BaiduMapModule.forRoot({ ak: '8azVgQbZR9irKHBOsqMzi8CAT7l1gtjt' }),
    RouterModule.forChild(routes)
  ],
  declarations: [
    BMapComponent,
  ],
  exports: [
    BMapComponent,
  ],
})
export class BMapModule {
}
