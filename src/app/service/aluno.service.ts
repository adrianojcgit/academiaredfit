import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../interface/aluno';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }

    getListaUsuarios(): Observable<Aluno[]> {
      const url = `${environment.apiUrl}`;
      return this.http.get<Aluno[]>(url);
    }

    getListaAlunoPaginado(pagina: number, tamanhoPagina: number): Observable<Aluno[]> {
      const url = `${environment.apiUrl}/${pagina}/${tamanhoPagina}`;
      return this.http.get<Aluno[]>(url)
    }
}
