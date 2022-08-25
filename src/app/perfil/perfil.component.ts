import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';
import { UsuarioClass } from '../usuario-class';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  miPortfolio:any;
 
  constructor(private datosPortfolio:PortfolioService) {
    
   }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      
      this.miPortfolio=data;
    });
  }
  
  

}
