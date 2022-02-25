import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';

import { BookingComponent } from './booking/booking.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShipsComponent } from './ships/ships.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { YourBookingsComponent } from './your-bookings/your-bookings.component';



export const appRoutes: Routes = [
    { path: 'signUp', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'employee',component: EmployeeComponent},
    { path: 'ship',component: ShipsComponent},
    { path: 'booking',component:BookingComponent},
    { path: 'yourBookings',component:YourBookingsComponent},
    { path: 'viewBookings',component:ViewBookingsComponent}

];