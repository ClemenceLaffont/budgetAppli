import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateComponent } from "./template/template.component";
import { BouletestComponent } from './bouletest/bouletest.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    BouletestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
