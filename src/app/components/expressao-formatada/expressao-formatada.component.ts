import { Component, Input, OnInit } from '@angular/core';
import { ItemExpressao } from 'src/app/model/itemExpressao.model';

@Component({
  selector: 'expressao-formatada',
  templateUrl: './expressao-formatada.component.html',
  styleUrls: ['./expressao-formatada.component.scss']
})
export class ExpressaoFormatadaComponent implements OnInit {
  
  @Input() itemExpressoes: ItemExpressao[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getLabelTipoComponente(item: ItemExpressao) {
    if(!item.componente) return '';
    return item.componente.substring(0,7);
  }

}
