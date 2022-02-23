import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyMailComponent } from './components/verify-mail/verify-mail.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyMailComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
