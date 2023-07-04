import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  // {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {
    path: 'login',
    component: LoginComponent
  },
  {path: 'home',
  component: HomeComponent,
  loadChildren: () => import('./components/components-routing.module').then(m => m.ComponentsRoutingModule
  )
  },

  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
