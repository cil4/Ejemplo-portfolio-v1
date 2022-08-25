import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
hardSkills:any;
softSkills:any;

  constructor(private datosPortfolio:PortfolioService, private route:ActivatedRoute) { 
    console.log(route.snapshot.params['skills']);
  }

  ngOnInit() :void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.hardSkills=data.hardSkills;
      this.softSkills=data.softSkills;
    })
  }
}