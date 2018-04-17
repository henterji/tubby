import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { CalendarComponent } from './calendar.component';

const routes: Routes = [
  {
    path: ''
    , component: CalendarComponent
  },
];

@NgModule({
  imports: [
    SharedModule,
    ScheduleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CalendarComponent
  ],
  exports: [
    CalendarComponent,
  ]
})
export class CalendarModule {
}
