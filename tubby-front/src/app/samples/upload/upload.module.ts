import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadModule, GrowlModule } from 'primeng/primeng';

import { SharedModule } from '../../shared/shared.module';
import { UploadComponent } from './upload.component';

const routes: Routes = [
  {
    path: '',
    component: UploadComponent
  },
];

@NgModule({
  imports: [
    SharedModule,
    FileUploadModule,
    GrowlModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UploadComponent,
  ],
  exports: [
    UploadComponent,
  ],
  providers: []
})
export class UploadModule {
}
