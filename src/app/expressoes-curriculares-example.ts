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
      componente: 'FAL0214 - Libras',
      children: []
    },
    {
      operador: 'OU',
      tipo: 'COMPONENTE',
      componente: 'FAL0215 - Outra Libras',
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
          componente: 'FAL0834 - Portugues avançado',
          children: []
        },
        {
          operador: 'OU',
          tipo: 'COMPONENTE',
          componente: 'FAL0999 - Outra Lingua portuguesa',
          children: []
        },
      ]
    }
  ];

}
