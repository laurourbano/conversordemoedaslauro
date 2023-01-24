import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConversorComponent } from './components/conversor/conversor.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HistoricoComponent } from './components/conversor/historico/historico.component';
import { ResultadoComponent } from './components/conversor/resultado/resultado.component';

import { MoedaService } from './services/moeda.service';
import { ConversorService } from './services/conversor.service';

@NgModule({
  declarations: [
    AppComponent,
    ConversorComponent,
    HeaderComponent,
    FooterComponent,
    HistoricoComponent,
    ResultadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [ ConversorService, MoedaService ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    MatMenuModule,
    ConversorComponent,
  ]
})
export class AppModule { }
