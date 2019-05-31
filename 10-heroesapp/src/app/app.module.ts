import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Componentes
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
// Formularios
import { FormsModule } from '@angular/forms';
// Rutas
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
