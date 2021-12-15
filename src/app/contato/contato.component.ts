import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  produtos = {
    nroos: '0001',
    cliente: 'Luiz Amaro',
    produto: 'Micro-ondas',
    marca: 'Eletrolux',
    modelo: 'ELENX-01',
    defeitoReclamado: 'Não funciona painel frontal',
    solucao: 'Trocar membrana do painel',
    status: 'aprovado'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
