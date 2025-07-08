import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'account', component: AccountComponent }
];