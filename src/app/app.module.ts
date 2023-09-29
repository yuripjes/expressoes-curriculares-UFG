import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';
import {ExpressoesCurricularesExample} from './expressoes-curriculares-example';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { CardPrincipalComponent } from './components/card-principal/card-principal.component';
import { LinhaItemExpressaoComponent } from './components/linha-item-expressao/linha-item-expressao.component';

@NgModule({
  declarations: [ExpressoesCurricularesExample, CardPrincipalComponent, LinhaItemExpressaoComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [ExpressoesCurricularesExample],
})
export class AppModule {}
