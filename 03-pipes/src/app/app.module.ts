import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//Language====
import { LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localEs from "@angular/common/locales/es-EC";
registerLocaleData(localEs);

//Components
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: "es-EC" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
