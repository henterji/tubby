import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  InputTextModule,
  DataTableModule,
  ButtonModule,
  DialogModule,
  DropdownModule,
  GrowlModule,
  PaginatorModule,
  CalendarModule,
  PasswordModule,
  RadioButtonModule,
  InputTextareaModule,
  InputMaskModule,
  SpinnerModule,
  InputSwitchModule,
  PanelModule,
  ConfirmDialogModule,
  ConfirmationService
} from 'primeng/primeng';

import { SharedModule } from '../../shared/shared.module';

import { PersonService } from './shared/person.service';
import { PersonsComponent } from './persons.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { AddPersonComponent } from './add-person/add-person.component';

const routes: Routes = [
  {
    path: '',
    component: PersonsComponent,
    children: [
      { path: 'edit-person/:id', component: EditPersonComponent },
      { path: 'add-person', component: AddPersonComponent }
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    InputTextModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    GrowlModule,
    PaginatorModule,
    CalendarModule,
    PasswordModule,
    RadioButtonModule,
    InputTextareaModule,
    InputMaskModule,
    SpinnerModule,
    InputSwitchModule,
    PanelModule,
    ConfirmDialogModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PersonsComponent,
    EditPersonComponent,
    AddPersonComponent
  ],
  exports: [
    PersonsComponent
  ],
  providers: [PersonService, ConfirmationService]
})
export class PersonsModule {
}
