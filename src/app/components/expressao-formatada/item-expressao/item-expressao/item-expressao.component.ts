import { Component, Input, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { ItemExpressao } from "src/app/model/itemExpressao.model";

@Component({
  selector: "item-expressao",
  templateUrl: "./item-expressao.component.html",
  styleUrls: ["./item-expressao.component.scss"],
})
export class ItemExpressaoComponent implements OnInit {
  /*Caso seja necessário retirar o wrapper
  @ViewChild('childRef') childRef: TemplateRef<any>;
  */
  
  @Input() itemExpressao: ItemExpressao = new ItemExpressao();
  @Input() index: number = -1;

  //ao passar o mouse no parenteses, destaca onde começa e onde termina a expressão
  destacarInicioFimExpressao: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  getLabelTipoComponente(item: ItemExpressao) {
    if (!item.componente) return "";
    return item.componente.substring(0, 7);
  }

  onMouseEnter() {
    this.destacarInicioFimExpressao = true;
  }

  onMouseLeave() {
    this.destacarInicioFimExpressao = false;
  }
}
