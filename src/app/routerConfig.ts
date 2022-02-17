import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';



export const appRoutes: Routes = [
    { path: 'signUp', component: SignUpComponent },
    { path: 'login', component: LoginComponent }
];