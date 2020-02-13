import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID} from '@angular/core';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { capitalizadoPipe} from '../app/pipes/capitalizado.pipes';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { OcultarPipe } from './pipes/ocultar.pipe';

registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AppComponent,
    capitalizadoPipe,
    DomSeguroPipe,
    OcultarPipe

  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
