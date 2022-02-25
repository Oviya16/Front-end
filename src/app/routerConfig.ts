import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { AssignTasksComponent } from './assign-tasks/assign-tasks.component';

import { BookingComponent } from './booking/booking.component';
import { DisplayFeedbackComponent } from './display-feedback/display-feedback.component';
import { EmployeeComponent } from './employee/employee.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ShipsComponent } from './ships/ships.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { YourBookingsComponent } from './your-bookings/your-bookings.component';
import { YourTasksComponent } from './your-tasks/your-tasks.component';



export const appRoutes: Routes = [
    { path: 'signUp', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'employee',component: EmployeeComponent},
    { path: 'ship',component: ShipsComponent},
    { path: 'booking',component:BookingComponent},
    { path: 'yourBookings',component:YourBookingsComponent},
    { path: 'viewBookings',component:ViewBookingsComponent},
    {path :'yourTasks',component:YourTasksComponent},
    { path:'assignTasks',component:AssignTasksComponent},
    { path : 'feedback',component:FeedbackComponent},
    { path:'displayFeedback',component:DisplayFeedbackComponent},
    { path: 'addFeedback',component:AddFeedbackComponent}
];