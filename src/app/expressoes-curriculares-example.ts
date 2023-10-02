import { Component } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ItemExpressao } from './model/itemExpressao.model';


/**
 * @title Basic cards
 */
@Component({
  selector: 'expressoes-curriculares',
  templateUrl: 'expressoes-curriculares-example.html',
})
export class ExpressoesCurricularesExample {
  
  itemExpressoes: ItemExpressao[] = [
    {
      operador: null,
      tipo: 'COMPONENTE',
      componente: 'FAL0214 - INTRODUÇÃO À LÍNGUA BRASILEIRA DE SINAIS - LIBRAS',
      children: []
    },
    {
      operador: 'OU',
      tipo: 'COMPONENTE',
      componente: 'FAL0223 - INTRODUÇÃO AOS ESTUDOS DA LIBRAS',
      children: []
    },
    {
      operador: 'OU',
      tipo: 'EXPRESSAO',
      componente: '',
      children: [
        {
          operador: null,
          tipo: 'COMPONENTE',
          componente: 'FAL0692 - LIBRAS BÁSICO 1',
          children: []
        },
        {
          operador: 'E',
          tipo: 'COMPONENTE',
          componente: 'FAL0698 - LIBRAS BÁSICO 2',
          children: []
        },
      ]
    }
  ];

}
