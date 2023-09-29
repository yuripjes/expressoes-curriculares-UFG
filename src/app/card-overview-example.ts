import { Component } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FluxoCurricular } from './model/fluxoCurricular';
import { TipoFluxoCurricularEnum } from './model/tipoFluxoCurricular.enum';
import { FluxoFrequenciaPeriodo } from './model/fluxoFrequenciaPeriodo';

/**
 * @title Basic cards
 */
@Component({
  selector: 'card-overview-example',
  templateUrl: 'card-overview-example.html',
})
export class CardOverviewExample {
  //TODO: Deletar se nao for usar
  displayedColumns: any[] = [];
  columnNames: string[] = [];

  dataSource: any[] = [];
  cabecalhosTabela: any[] = [];

  processando: boolean = true;

  /*      
        adaptado de outros locais

*/
  //da matrizService
  duracaoMinimaObservable: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  maiorPeriodoPreenchido: number = 0;
  todosFluxosCurriculares: FluxoCurricular[] = [];
  private matrizFluxosCurricularesAdicionados: FluxoCurricular[] = []; //this.matrizService.matrizCurricular

  //da matriz curricular
  matrizDuracaoMinimaSemestres: number[] = Array(20)
    .fill(0)
    .map((value, index) => index + 1);
  matrizDuracaoMinima?: number;

  /*
      Variaveis cadastradas agora

      Idéia: colocar esse limite nas constantes
      -validar o último período antes de abrir o select-menu (se reclamarem do desempenho a gente melhora)

  */

  LIMITE_DURACAO_MINIMA: number = 20;

  constructor() {}

  ngOnInit(): void {
    /*
      Gera o objeto completo até o limite de duração minima, mas renderiza 
      apenas até o que for selecionado na duração minima utilizando o slice()
    */
    //TODO: verificar porque está disparando duas vezes todas as vezes que altera o valor da duracaoMinima
    this.gerarListagemFLuxosCurriculares(this.LIMITE_DURACAO_MINIMA);
    this.duracaoMinimaObservable.subscribe({
      next: (d) => {
        //console.log(`Alterou duração mínima: ${d}`);
        ///this.gerarListagemFLuxosCurriculares(d);
      },
    });
  }

  getLabelTipoTipoFluxoCurricular(chave: string) {
    return Object.entries(TipoFluxoCurricularEnum).find(
      ([key, val]) => key === chave
    )?.[1];
  }

  incrementarFrequencia(fluxoFrequenciaPeriodo: FluxoFrequenciaPeriodo) {
    if (fluxoFrequenciaPeriodo.frequencia < 5) {
      fluxoFrequenciaPeriodo.frequencia++;

      /* Validaçao vai ser realizada ao abrir o select-menu
      if (
        fluxoFrequenciaPeriodo.periodo &&
        fluxoFrequenciaPeriodo.periodo > this.maiorPeriodoPreenchido &&
        fluxoFrequenciaPeriodo.frequencia > 0
      ) {
        this.maiorPeriodoPreenchido = fluxoFrequenciaPeriodo.periodo;
      }*/

      return;
    }

    fluxoFrequenciaPeriodo.frequencia = 0;
  }

  //Decrementa com o clique do botao direito
  decrementarFrequencia(
    $event: Event,
    fluxoFrequenciaPeriodo: FluxoFrequenciaPeriodo
  ) {
    $event.preventDefault();

    if (fluxoFrequenciaPeriodo.frequencia > 0) {
      fluxoFrequenciaPeriodo.frequencia--;

      /*
      TODO
      Rascunho de Ideia:
      1 pega index= this.matrizService.maiorPeriodoPreenchido-1 (considerando que o array FluxoFrequenciaPeriodo[] é linear começando pelo primeiro periodo);
      2 acessa cada tipo de fluxo curricular.fluxoFrequenciaPeriodo na posição index e verifica se pelo menos um dos itens do array tem valor maior que zero

      No select-menu: disparar a verificação apenas ao abrir o select?
        Pois é o único local ao qual o usuário irá visualizar a mudança (opção bloqueada)
        *Com essa solução, parece ter um peso menor de processamento (que inicialmente foi pensado em ser executado a cada clique nas caixinhas de frequencia do fluxo curricular)
        **No incremento, talvez nem incrementar a matrizService.maiorPeriodoPreenchido.
        ***Talvez nem seja necessário receber a matriz.ultimoPeriodoFluxoCurricular, afinal, ela já vai ser calculada ao abrir o select-menu

      */
      return;
    }

    fluxoFrequenciaPeriodo.frequencia = 5;
  }

  private gerarListagemFLuxosCurriculares(duracaoMinima: number) {
    let fluxos: FluxoCurricular[] = [];

    //Gerando as celulas com os dados
    Object.keys(TipoFluxoCurricularEnum).forEach((t) => {
      let fluxo = this.pesquisarFLuxoCurricular(t);

      let fluxosFrequenciasPeriodos: FluxoFrequenciaPeriodo[] = [];
      //Adicionando os períodos
      for (let p = 1; p <= duracaoMinima; p++) {
        let fluxoFrequenciaPeriodo = this.pesquisarFrequenciaPeriodo(fluxo, p);

        fluxosFrequenciasPeriodos.push(fluxoFrequenciaPeriodo);
      }

      fluxo.fluxosFrequenciasPeriodos = fluxosFrequenciasPeriodos;

      fluxos.push(fluxo);

      /// fluxosDatasource.push(row);
    });

    this.todosFluxosCurriculares = fluxos;

    this.gerarCabecalhos(duracaoMinima);
  }

  gerarCabecalhos(duracaoMinima: number) {
    //Não ficou legal aproveitar o laço for do método gerarListagemFLuxosCurriculares()... Estava duplicando as linhas.

    //let newCabecalhos = [{ label: '' }];
    let newCabecalhos = [];

    //Gerando Cabeçalhos da tabela
    for (let i = 1; i <= duracaoMinima; i++) {
      newCabecalhos.push({ label: `${i}` });
    }

    this.cabecalhosTabela = newCabecalhos;

    this.processando = false;
  }

  pesquisarFLuxoCurricular(tipoFluxo: string) {
    //let matriz = this.matrizService.matrizCurricular;
    let fluxoEncontrado = this.matrizFluxosCurricularesAdicionados?.find(
      function (fc) {
        return tipoFluxo === fc.tipoFluxo;
      }
    );

    if (!fluxoEncontrado) {
      fluxoEncontrado = new FluxoCurricular();
      fluxoEncontrado.tipoFluxo = tipoFluxo;
      fluxoEncontrado.fluxosFrequenciasPeriodos = [];
    }

    return fluxoEncontrado;
  }

  pesquisarFrequenciaPeriodo(
    fluxo: FluxoCurricular,
    periodo: number
  ): FluxoFrequenciaPeriodo {
    let fluxoFrequenciaPadrao = new FluxoFrequenciaPeriodo();
    fluxoFrequenciaPadrao.periodo = periodo;
    fluxoFrequenciaPadrao.frequencia = 0;

    if (fluxo.id) {
      return {
        ...(fluxo.fluxosFrequenciasPeriodos?.find(function (ffp) {
          return ffp.periodo === periodo;
        }) || fluxoFrequenciaPadrao),
      };
    }
    return fluxoFrequenciaPadrao;
  }

  public alterarDuracaoMinima(event: any): void {
    console.log(`disparou alterarDuraçãoMinima: ${event}`);
    console.log(event);
    //Solução encontrada pois o input desativado não altera valor
    ///this.matrizForm.controls['duracaoMaxima'].enable();
    let min = event;
    let max = Math.ceil(min * (150 / 100));
    max = max % 2 === 0 ? max : max + 1;

    this.matrizDuracaoMinima = min;
    ///this.matrizService.matrizCurricular.duracaoMaxima = max

    //TODO: encontrar uma forma melhor de monitorar alterações no atributo matrizCurricular.duracaoMinima
    this.duracaoMinimaObservable.next(Number(min));

    ///this.matrizForm.controls['duracaoMaxima'].disable();
  }

  //Teste
  cabecalhoReduzido() {
    return this.cabecalhosTabela.slice(0, this.duracaoMinimaObservable.value);
  }
  listaReduzida(fluxosFrequenciasPeriodos?: FluxoFrequenciaPeriodo[]) {
    return (
      fluxosFrequenciasPeriodos?.slice(0, this.duracaoMinimaObservable.value) ||
      []
    );
  }

  openedChange(isOpen: boolean) {
    if (isOpen) {
      console.log('abriu o select');
      this.verificarMaiorPeriodoPreenchido();
    }
  }

  verificarMaiorPeriodoPreenchido() {
    this.maiorPeriodoPreenchido = 0;
    this.todosFluxosCurriculares.forEach((fc) => {
      for (let i = 0; i < this.duracaoMinimaObservable.value; i++) {
        let ffps = fc.fluxosFrequenciasPeriodos || [];
        let ffp = ffps[i];
        if (
          ffp &&
          ffp.periodo &&
          ffp.frequencia > 0 &&
          ffp.periodo > this.maiorPeriodoPreenchido
        ) {
          this.maiorPeriodoPreenchido = ffp.periodo;
        }
      }
    });
  }
}
