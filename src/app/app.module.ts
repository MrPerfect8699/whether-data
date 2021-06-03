import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { CitylistComponent } from './citylist/citylist.component';
import { TemperaturePipe } from './services/temperature.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CitylistComponent,
    TemperaturePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
