import { Component, Input, OnInit } from '@angular/core';
import { ItemExpressao } from 'src/app/model/itemExpressao.model';

@Component({
  selector: 'card-principal',
  templateUrl: './card-principal.component.html',
  styleUrls: ['./card-principal.component.scss']
})
export class CardPrincipalComponent implements OnInit {

  @Input() itemExpressoes: ItemExpressao[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
