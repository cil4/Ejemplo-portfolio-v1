import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
 

  constructor(private datosPortfolio:PortfolioService) { }

  menuVariable : boolean = false;
  menu_icon_variable : boolean = false;
  abrirMenu(){
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
  }
  ngOnInit(): void {
  }

}
