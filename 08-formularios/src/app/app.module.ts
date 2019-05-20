import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './components/data/data.component';
import { TemplateComponent } from './components/template/template.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TemplateB4Component } from './components/template-b4/template-b4.component';

@NgModule({
  declarations: [AppComponent, DataComponent, TemplateComponent, NavbarComponent, TemplateB4Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
