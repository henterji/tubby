import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeModule, ButtonModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { FilesService } from './files.service';
import { FilesComponent } from './files.component';

const routes: Routes = [
  { path: '', component: FilesComponent },
];

@NgModule({
  imports: [
    SharedModule,
    TreeModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FilesComponent,
  ],
  exports: [
    FilesComponent,
  ],
  providers: [FilesService]
})
export class FilesModule {
}
