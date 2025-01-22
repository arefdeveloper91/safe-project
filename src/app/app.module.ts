import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLoginLayoutComponent } from './components/default-login-layout/default-login-layout.component';
import { PrimatyInputComponent } from './components/primary-input/primary-input.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/feature-login/login/login.component';
import { ResetComponent } from './pages/feature-login/reset/reset.component';
import { SignupComponent } from './pages/feature-login/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/feature-login/user/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLoginLayoutComponent,
    PrimaryInputComponent,
    ForgotPasswordComponent,
    LoginComponent,
    ResetComponent,
    SignupComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
