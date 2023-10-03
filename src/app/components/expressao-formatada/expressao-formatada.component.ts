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

  getLabelTipoComponente(item: ItemExpressao, index: number) {
    if(!item.componente) return '';
    let codigo = item.componente.substring(0,7);
    return index=== 0 ? `${codigo} `: `${item.operador} ${codigo} `
  }

}
