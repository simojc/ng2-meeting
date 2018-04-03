
import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'

import { HomeComponent } from './home/index'
import { AuthGuard } from '../_guards/index';

export const userRoutes = [
    { path: 'profile', component: ProfileComponent},
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
]
