import { Component } from '@angular/core';
import { ConversorService } from 'src/app/services/conversor.service';
import { MoedaService } from 'src/app/services/moeda.service';


@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: [ './conversor.component.css' ]
})
export class ConversorComponent {
  moedas: Array<any>=[];

  constructor( private moedaService: MoedaService, private conversoService: ConversorService) { }

  listar(){
    this.conversoService.listar().substcribe((res: any[]) => this.moedas = res);
  }
}
