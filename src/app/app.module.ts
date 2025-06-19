import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AtletasComponent } from './atletas/atletas.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { ClientesComponent } from './clientes/clientes.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { PagosComponent } from './pagos/pagos.component';
import { TorneosComponent } from './torneos/torneos.component';

@NgModule({
  declarations: [
    AppComponent,
    AtletasComponent,
    AutenticacionComponent,
    Client