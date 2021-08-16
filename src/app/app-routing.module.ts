import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { NotFoundComponent } from './screens/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', redirectTo: '/' },
  { path: 'main', redirectTo: '/' },
  { path: 'sign-up', redirectTo: '/' },
  { path: 'login', redirectTo: '/' },
  { path: 'dashboard', redirectTo: '/' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
