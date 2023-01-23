import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  BaseUrl = 'https://api.exchangerate.host/';

  moedaBase?: string;
  moedaOrigem?: string;
  moedaDestino?: string;
  valor?: number;

  URLmoedas = `${ this.BaseUrl }latest`;
  URL = `${ this.BaseUrl }convert?from=${ this.moedaOrigem }&to=${ this.moedaDestino }&amount=${ this.valor }`;

  constructor(private http: HttpClient) { }

  //metodos para buscar informações no backend via api
  listar() {
    return this.http.get<[]>(`${ this.BaseUrl }`);
  }
}

