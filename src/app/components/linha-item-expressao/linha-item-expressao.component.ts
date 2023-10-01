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

  constructor() { }

  ngOnInit(): void {
  }


  deleteItemExpressao($event: MouseEvent){
    this.onDeleteItemExpressao.emit();

  }

}
