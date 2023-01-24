import { Component, OnInit } from '@angular/core';
import { ConversorService } from 'src/app/services/conversor.service';
import { MoedaService } from 'src/app/services/moeda.service';
@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: [ './resultado.component.css' ]
})

export class ResultadoComponent implements OnInit {
  moedas = [
    {
      "valor":"Valor Inserido",
      "simbolo": "simbolo",
      "origem": "Moeda Origem",
      "taxa": "taxa",
      "destino": "Moeda Destino",
      "convertido":"Valor Convertido",
      "data":"Data",
      "hora":"Hora",
    }
  ];

  constructor(private moedaService: MoedaService, private conversoService: ConversorService){}
  ngOnInit() {
    this.listar();
  }
  listar() {
    this.conversoService.listar().subscribe((res) => console.log(res));
  }
}
