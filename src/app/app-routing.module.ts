import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarpetaProyectoComponent } from './carpeta-proyecto/carpeta-proyecto.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  { path: 'inicio', component: PortfolioComponent, pathMatch: 'full'},
  {path: 'inicio/:educacion', component:EducacionComponent},
  {path: 'inicio/:experiencia', component: ExperienciaLaboralComponent},
  {path: 'inicio/:proyectos', component: CarpetaProyectoComponent},
  {path: 'inicio/:skills', component: SkillsComponent},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
