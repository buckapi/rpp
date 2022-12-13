import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsuccessRoutingModule } from './ticketsuccess-routing.module';
import { TicketsuccessComponent } from './ticketsuccess.component';


@NgModule({
  declarations: [
    TicketsuccessComponent
  ],
  imports: [
    CommonModule,
    TicketsuccessRoutingModule
  ]
})
export class TicketsuccessModule { }
