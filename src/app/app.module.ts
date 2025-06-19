import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AtletasComponent } from './atletas/atletas.component';

@NgModule({
  declarations: [
    AppComponent, //lo marca como error
    AtletasComponent //lo marca como error
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] //lo marca como error
})
export class AppModule { }
