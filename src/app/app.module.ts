import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EngineerComponent } from './components/engineer/engineer.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    CustomerComponent,
    EngineerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
