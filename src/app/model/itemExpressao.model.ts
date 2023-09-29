export class ItemExpressao {
    id?: number;
    operador: 'E' | 'OU' | null;
	tipo: 'COMPONENTE' | 'EXPRESSAO';
	componente: string;
	children: ItemExpressao[]
}