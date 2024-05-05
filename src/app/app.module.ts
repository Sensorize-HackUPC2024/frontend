import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevicesComponent } from './devices/devices.component';
import { MaterialModule } from './material.module';  // Asume que tu módulo se llama MaterialModule

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DevicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule  // Importa el módulo de Material aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
