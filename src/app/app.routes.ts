import { Routes } from '@angular/router';
import { Landing } from './pages/auth/landing/landing';
import { CompanyRegister } from './pages/auth/company-register/company-register';
import { IndividualRegister } from './pages/auth/individual-register/individual-register';
import { Login } from './pages/auth/login/login';
import { ForgetPassword } from './pages/auth/forget-password/forget-password';
import { ResetPassword } from './pages/auth/reset-password/reset-password';

export const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: Landing },
    { path: 'company', component: CompanyRegister },
    { path: 'individual', component: IndividualRegister },
    { path: 'login', component: Login },
    { path: 'forgot-password', component: ForgetPassword },
    { path: 'reset-password', component: ResetPassword },



];
