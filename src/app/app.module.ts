import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { appRoutes } from './routerConfig';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShipsComponent } from './ships/ships.component';
import { BookingComponent } from './booking/booking.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { YourBookingsComponent } from './your-bookings/your-bookings.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignUpComponent,
    LoginComponent,
    EmployeeComponent,
    ShipsComponent,
    BookingComponent,
    ViewBookingsComponent,
    YourBookingsComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
