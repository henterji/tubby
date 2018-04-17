import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonModule, EditorModule as QuillModule } from 'primeng/primeng';

import { SharedModule } from '../../shared/shared.module';
import { EditorComponent } from './editor.component';

const routes: Routes = [
  {
    path: '',
    component: EditorComponent
  },
];

@NgModule({
  imports: [
    SharedModule,
    ButtonModule,
    QuillModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    EditorComponent,
  ],
  exports: [
    EditorComponent,
  ],
})
export class EditorModule {
}
