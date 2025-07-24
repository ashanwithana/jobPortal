import { Routes } from '@angular/router';
import { Landing } from './pages/auth/landing/landing';
import { CompanyLogin } from './pages/auth/company-login/company-login';
import { IndividualLogin } from './pages/auth/individual-login/individual-login';

export const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: Landing },
    { path: 'company', component: CompanyLogin },
    { path: 'individual', component: IndividualLogin },
];
