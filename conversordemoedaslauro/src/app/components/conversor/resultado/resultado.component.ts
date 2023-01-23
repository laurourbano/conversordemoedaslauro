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
      "nome":"a",
      "numero": 1,
    },
    {
      "nome":"b",
      "numero": 2,
    }];
  constructor(private moedaService: MoedaService, private conversoService: ConversorService){}
  ngOnInit() {
    this.listar();
  }
  listar() {
    this.conversoService.listar().subscribe((res: []) => this.moedas = res);
  }
}
