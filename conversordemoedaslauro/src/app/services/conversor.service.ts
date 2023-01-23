import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  moedaBase?: string;
  moedaOrigem?:string;
  moedaDestino?:string;
  valor?:number;

  BaseUrl: string = 'https://api.exchangerate.host/';
  URLmoedas: string = `${ this.BaseUrl }latest`;
  URL: string = `${ this.BaseUrl }convert?from=${ this.moedaOrigem }&to=${ this.moedaDestino }&amount=${ this.valor }`;

  constructor() { }

}

