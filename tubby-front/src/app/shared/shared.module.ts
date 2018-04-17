import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  CodeTablePipe,
  CodeItemPipe
} from './pipes';
import {
  StylesDirective,
  EchartsDirective,
  HasPermissionDirective,
  ValidateOnBlurDirective
} from './directives';
import { ToastComponent } from './toast';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { CalendarLocales } from './locales/calendar.locales';

import { CodeTableService } from '../core/code-table.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
  ],
  declarations: [
    StylesDirective,
    EchartsDirective,
    HasPermissionDirective,
    ValidateOnBlurDirective,
    CodeTablePipe,
    CodeItemPipe,
    ToastComponent,
    LoadingBarComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    ToastComponent,
    LoadingBarComponent,
    StylesDirective,
    EchartsDirective,
    HasPermissionDirective,
    ValidateOnBlurDirective,
    CodeTablePipe,
    CodeItemPipe
  ],
  providers: [
    CodeTableService,
    CalendarLocales
  ]
})
export class SharedModule {
}
