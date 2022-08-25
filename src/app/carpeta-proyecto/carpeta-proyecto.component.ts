import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carpeta-proyecto',
  templateUrl: './carpeta-proyecto.component.html',
  styleUrls: ['./carpeta-proyecto.component.css']
})
export class CarpetaProyectoComponent implements OnInit {
  proyectosLista:any;



  constructor(private datosPortfolio:PortfolioService, private route:ActivatedRoute) {
    console.log(route.snapshot.params['proyectos']);
   }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      
      this.proyectosLista=data.projects;
    })
  }

}