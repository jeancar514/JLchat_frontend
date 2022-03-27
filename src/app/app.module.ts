import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
/* import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics'; */
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app.routing';
import { JlchatComponent } from './jlchat/jlchat.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './login/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JlchatComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    /* AngularFireAnalyticsModule, */
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
