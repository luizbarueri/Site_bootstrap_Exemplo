import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {
  textoLogo = {frase:'Saiba mais sobre nossos serviços...'};
  login = {usuario: 'Luiz', senha: '1234'}
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

