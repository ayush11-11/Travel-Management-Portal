import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './user/shared/userservice';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AuthRoutingModule } from './user/user-routing.module';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminServiceService } from './admin/shared/admin-service.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AdminTicketService } from './admin/shared/admin-ticket.service';
import { AdminAuthService } from './Auth/admin/admin-auth.service';
import { AdminGaurdService } from './Auth/admin/admin-gaurd.service';
import { UserGaurdService } from './Auth/user/user-gaurd.service';
import { UserAuthService } from './Auth/user/user-auth.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotfoundComponent } from './notfound/notfound.component';
 
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,UserModule,AuthRoutingModule,HttpClientModule,AdminModule,AdminRoutingModule, NoopAnimationsModule],
  providers: [UserService,AdminServiceService,AdminTicketService,AdminAuthService,AdminGaurdService,UserGaurdService,UserAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
