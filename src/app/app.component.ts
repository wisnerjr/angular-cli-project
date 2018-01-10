import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { DadosTabela } from 'app/model/dados-tabela.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menu: MenuItem[];
  fullImagePath = '../assets/img/computer-114-216996.png';

  dados: DadosTabela[] = [];
  datas: any[] = [];
  valores: any[] = [];
  data: any;
  position = 'right';
  message = 'Links estão redirecionando para páginas web.'

  ngOnInit() {
    this.gerarMenu();
    this.gerarDados();
  }

  gerarMenu() {
    this.menu = [{
      label: 'Teste Menu',
      items: [
        { label: 'PrimeFaces', icon: 'fa-plus', url: 'http://www.primefaces.org/primeng' },
        { label: 'Google', icon: 'fa-google', url: 'http://www.google.com.br' },
        { label: 'Accenture', icon: 'fa-angle-right', url: 'https://www.accenture.com' },
        { label: 'Gapso', icon: 'fa-thumbs-o-up', url: 'http://gapso.azurewebsites.net' }]
    }]
  }

  gerarDados() {
    this.dados.push(new DadosTabela('02/01/2018', 10, 7, 5, 7 - 5, 3, 1));
    this.dados.push(new DadosTabela('03/01/2018', 194, 190, 190, 190 - 190, 120, 0));
    this.dados.push(new DadosTabela('04/01/2018', 45, 80, 52, 80 - 52, 117, 63));
    this.dados.push(new DadosTabela('05/01/2018', 98, 107, 23, 107 - 23, 100, 0));
    this.dados.push(new DadosTabela('06/01/2018', 429, 144, 42, 144 - 42, 48, 54));
    this.dados.push(new DadosTabela('07/01/2018', 42, 23, 20, 23 - 20, 23, 3));
    this.dados.push(new DadosTabela('08/01/2018', 10, 10, 5, 10 - 5, 0, 0));
    this.dados.push(new DadosTabela('09/01/2018', 14, 11, 9, 11 - 9, 4, 2));

    this.populaDadosGrafico();
  }

  populaDadosGrafico() {
    this.dados.forEach(x => {
      this.datas.push(x.data);
      this.valores.push(x.calculo);
    })
    this.gerarGrafico();
  }

  gerarGrafico() {
    this.data = {
      labels: this.datas,
      datasets: [
        {
          label: 'Capacidade - Atendimento Realizado',
          backgroundColor: '#9CCC65',
          borderColor: '#dae2ea',
          data: this.valores
        }]
    }
  }
}
