import { Component, Input, OnInit } from '@angular/core';
import { ItemExpressao } from 'src/app/model/itemExpressao.model';

@Component({
  selector: 'card-principal',
  templateUrl: './card-principal.component.html',
  styleUrls: ['./card-principal.component.scss']
})
export class CardPrincipalComponent implements OnInit {

  @Input() itemExpressoes: ItemExpressao[] = [];

  @Input() alturaDoNo: number = 0; //0 = raiz

  constructor() { }

  ngOnInit(): void {
  }

  adicionarComponente(){
    console.log('adicionarComponente()')
    let itemExpressao = new ItemExpressao();
    itemExpressao.tipo = 'COMPONENTE';
    this.itemExpressoes.push(itemExpressao);
  }


  adicionarGrupo(){
    console.log('adicionarGrupo()')
    let itemExpressao = new ItemExpressao();
    itemExpressao.tipo = 'EXPRESSAO';

    let itemExpressaoChildren = new ItemExpressao();
    itemExpressaoChildren.tipo = 'COMPONENTE';

    itemExpressao.children.push(itemExpressaoChildren);

    this.itemExpressoes.push(itemExpressao);
  }
}
