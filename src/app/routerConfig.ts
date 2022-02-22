import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShipsComponent } from './ships/ships.component';



export const appRoutes: Routes = [
    { path: 'signUp', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'employee',component: EmployeeComponent},
    { path: 'ship',component: ShipsComponent},

];