import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';
import { UsuarioClass } from '../usuario-class';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  perfil:any; 

  intro(value:String){

  }
  borrar(value:String){

  }
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
  
  this.datosPortfolio.obtenerDatos().subscribe(data =>{
    this.perfil = data;
  });
  }
}
