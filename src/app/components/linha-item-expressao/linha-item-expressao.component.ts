import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemExpressao } from 'src/app/model/itemExpressao.model';

@Component({
  selector: 'linha-item-expressao',
  templateUrl: './linha-item-expressao.component.html',
  styleUrls: ['./linha-item-expressao.component.scss']
})
export class LinhaItemExpressaoComponent implements OnInit {

  @Input() itemExpressao: ItemExpressao = new ItemExpressao();
  @Input() index: number = -1;

  @Output() onDeleteItemExpressao = new EventEmitter();

  modoEdicao: boolean = false;

  @Input() alturaDoNo: number = 0; //0 = raiz

  componentesDisponiveis: string[] = [
    'FAL0089 - ESTÁGIO 1 LIBRAS',
    'FAL0098 - ESTÁGIO 2 LIBRAS',
    'FAL0214 - INTRODUÇÃO À LÍNGUA BRASILEIRA DE SINAIS - LIBRAS',
    'FAL0223 - INTRODUÇÃO AOS ESTUDOS DA LIBRAS',
    'FAL0255 - LIBRAS - LÍNGUA BRASILEIRA DE SINAIS',
    'FAL0692 - LIBRAS BÁSICO 1',
    'FAL0698 - LIBRAS BÁSICO 2',
    'IME0075 - CÁLCULO 1A',
    'IME0351 - ÁLGEBRA LINEAR'
  ]

  constructor() { }

  ngOnInit(): void {
  }


  deleteItemExpressao($event: MouseEvent){
    this.onDeleteItemExpressao.emit();

  }

}
