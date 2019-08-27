import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { environment } from '../environments/environment';
import { GravityCalculatorComponent } from './components/gravity-calculator/gravity-calculator.component';
import { AboutKadeComponent } from './components/about-kade/about-kade.component';
import { PictureLibraryComponent } from './components/picture-library/picture-library.component';

const routes: Routes = [
  { path: 'login-form', component: LoginFormComponent },
  { path: 'registration-form', component: RegistrationFormComponent },
  { path: 'home', component: HomeComponent },

  // About
  {path: 'about-kade', component: AboutKadeComponent},

  // Games and Tools
  { path: 'gravity-calculator', component: GravityCalculatorComponent },
  { path: 'picture-library', component: PictureLibraryComponent },

  // Defaults
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
