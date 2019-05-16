import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

// Rutas
import { APP_ROUTES } from './app.routes';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, PreciosComponent, ProtegidaComponent],

  imports: [BrowserModule, APP_ROUTES],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
