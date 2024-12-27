import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './features/layout/layout.component';

const routes: Routes = [
  {path: 'archi-app/auth', loadChildren: () => import('./features/authentification/authentification.module').then(m => m.AuthentificationModule)},

  {
    path: "archi-app", component: LayoutComponent,  children: [
      {
     // path: "", canActivateChild: [LoginGuard], children: [
      path: "", children: [
        { path: "", loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
        { path: "", loadChildren: () => import('./features/client/client.module').then(m => m.ClientModule) },
        ]
      }
    ]
  },
  {path:'**', redirectTo: 'archi-app'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
