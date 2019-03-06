import { Component, OnInit, ViewChild } from '@angular/core';
import { Aluno } from '../../interface/aluno';
import { AlunoService } from '../../service/aluno.service';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css']
})
export class ListarAlunoComponent implements OnInit {
  public alunos: Aluno[];
  public pagina: number;
  public tamanhoPagina: number;
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.getListaAlunoPaginado(1, 10);
  }

  getListaAlunoPaginado(pagina: number, tamanhoPagina: number) {
    this.alunoService.getListaAlunoPaginado(pagina, tamanhoPagina)
      .subscribe((dados: Aluno[]) => {
        this.alunos = dados,
        this.pagina = 1,
        this.tamanhoPagina = 10;
      }, () => { this.errorMsgComponent.setError('Falha ao buscar dados dos Alunos!'); });
  }

  getListaAlunoProximo(pagina: number, tamanhoPagina: number) {
    this.alunoService.getListaAlunoPaginado(pagina, tamanhoPagina)
      .subscribe((dados: Aluno[]) => {
        this.alunos = dados,
        this.pagina = 10,
        this.tamanhoPagina = 5;
      }, () => { 'Erro'; });
  }

}
