import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './login/login.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { SkillsComponent } from './skills/skills.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module';
import { PerfilComponent } from './perfil/perfil.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ButtonComponent } from './button/button.component';
import { CarpetaProyectoComponent } from './carpeta-proyecto/carpeta-proyecto.component'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EducacionComponent } from './educacion/educacion.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from './servicios/portfolio.service';
import { InterceptorService } from './servicios/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    LoginComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    SkillsComponent,
  
    
    PerfilComponent,
    ButtonComponent,
    CarpetaProyectoComponent,
    PageNotFoundComponent,
    EducacionComponent,
    CursosComponent,
    ExperienciaLaboralComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    NgCircleProgressModule.forRoot({
      // valores por defecto
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      subtitleColor:"#ffffff",
      titleColor : "#ffffff",
      unitsColor: "#ffffff",
      
      
    }),
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
   
   
  
    
  ],
  providers: [PortfolioService,
  {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
