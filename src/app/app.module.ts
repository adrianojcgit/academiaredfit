import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListarAlunoComponent } from './paginas/listar-aluno/listar-aluno.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';
import { DashboardPrincipalComponent } from './paginas/dashboard-principal/dashboard-principal.component';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { FormAlunoComponent } from './compartilhado/form-aluno/form-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarAlunoComponent,
    BarraNavegacaoComponent,
    MenuLateralComponent,
    DashboardPrincipalComponent,
    ErrorMsgComponent,
    FormAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
