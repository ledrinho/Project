import { Chart } from 'chart.js';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from '../router';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { TabeleComponent } from './tabele/tabele.component';
import { SAndp500TabelaComponent } from './s-andp500-tabela/s-andp500-tabela.component';
import { BeogradTabelaComponent } from './beograd-tabela/beograd-tabela.component';
import { ZagrebTabelaComponent } from './zagreb-tabela/zagreb-tabela.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PapaParseModule } from 'ngx-papaparse';
import { AuthGuardService } from './auth-guard.service';

import { BeogradChartComponent } from './beograd-chart/beograd-chart.component';
import { SandP500ChartComponent } from './sand-p500-chart/sand-p500-chart.component';
import { ZagrebChartComponent } from './zagreb-chart/zagreb-chart.component';
import { ChartsComponent } from './charts/charts.component';
import { PravilaComponent } from './pravila/pravila.component';
import { AplikacijaComponent } from './aplikacija/aplikacija.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
    UploadFileComponent,
    TabeleComponent,
    SAndp500TabelaComponent,
    BeogradTabelaComponent,
    ZagrebTabelaComponent,


    BeogradChartComponent,
    SandP500ChartComponent,
    ZagrebChartComponent,
    ChartsComponent,
    PravilaComponent,
    AplikacijaComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    PapaParseModule

  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
