import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { UserComponent } from './Component/user/user.component';
import { AppointmentComponent } from './Component/appointment/appointment.component';
import { HistoryComponent } from './Component/history/history.component';
import { MedicalRecordComponent } from './Component/medical-record/medical-record.component';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { provideHttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AppointmentComponent,
    HistoryComponent,
    MedicalRecordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    AppRoutingModule,
    PaginatorModule,
    InputTextModule,
    DropdownModule,
    RadioButtonModule,
    CalendarModule,
  ],
  providers: [provideHttpClient(),],
  bootstrap: [AppComponent],
})
export class AppModule {}
