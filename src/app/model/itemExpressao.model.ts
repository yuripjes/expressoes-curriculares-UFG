export class ItemExpressao {
    id?: number;
    operador: 'E' | 'OU' | null;
	tipo: 'COMPONENTE' | 'EXPRESSAO'; //Se houverem mais tipos, o linha-item-expressao.component.html deverá ser refatorado
	componente: string;
	children: ItemExpressao[]
}