import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
