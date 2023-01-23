import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  BaseUrl: string = 'https://api.exchangerate.host/';

  moedaBase?: string;
  moedaOrigem?:string;
  moedaDestino?:string;
  valor?:number;

  URLmoedas: string = `${ this.BaseUrl }latest`;
  URL: string = `${ this.BaseUrl }convert?from=${ this.moedaOrigem }&to=${ this.moedaDestino }&amount=${ this.valor }`;

  constructor(private http: HttpClient) { }

  //metodos para buscar informações no backend via api
  listar(){
    return this.http.get<any[]>(`${this.BaseUrl}`);
  }
}

