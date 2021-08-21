import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';

const apiKey = environment.apiKey
const apiUrl = environment.apiUrl;
const headers = new HttpHeaders({
  'X-Api-Key': apiKey
})

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  headlinesPage = 0;

  categoriaActual = '';
  categoriaPage = 0;

  constructor(private http: HttpClient) { }

  private execQuery<T>(query: string): Observable<T> {
    let fullQuery = `${apiUrl}/${query}`;
    return this.http.get<T>(fullQuery, {headers})
  }


  getTopHeadLines(pais: string): Observable<RespuestaTopHeadLines> {
    this.headlinesPage++;
    return this.execQuery<any>(`/top-headlines?country=${pais}&page=${this.headlinesPage}`);
  }

  getTopHeadLinesByCategoria(categoria: string, pais: string): Observable<RespuestaTopHeadLines> {
    if (this.categoriaActual === categoria) {
      this.categoriaPage++;
    } else {
      this.categoriaPage = 1;
      this.categoriaActual = categoria;
    }
    return this.execQuery(`/top-headlines?country=${pais}&category=${categoria}&page=${this.categoriaPage}`);
  }
}
