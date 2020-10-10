import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NgxPaginationModule } from 'ngx-pagination';
import{MatTableModule} from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar'




@NgModule({
  declarations: [AdminLoginComponent, AdminDashboardComponent, TicketDetailsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,ReactiveFormsModule,MatInputModule,MatToolbarModule,MatGridListModule,MatFormFieldModule,FormsModule,NgxPaginationModule,MatTableModule,MatPaginatorModule,MatSortModule,MatIconModule
  ],
  exports:[AdminLoginComponent, AdminDashboardComponent]
})
export class AdminModule { }
