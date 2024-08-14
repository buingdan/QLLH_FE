import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './Component/appointment/appointment.component';
import { UserComponent } from './Component/user/user.component';
import { MedicalRecordComponent } from './Component/medical-record/medical-record.component';
import { HistoryComponent } from './Component/history/history.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'appointment',
    component: AppointmentComponent,
  },
  {
    path: 'medical-record',
    component: MedicalRecordComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
