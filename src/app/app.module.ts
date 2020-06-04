import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoProveedoresComponent } from './proveedores/listado-proveedores/listado-proveedores.component';
import { NavComponent } from './nav/nav.component';
import { VisualizarProveedorComponent } from './proveedores/visualizar-proveedor/visualizar-proveedor.component';
import { LoadFadeDirective } from './directivas/load-fade.directive';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { SinPermisosComponent } from './sin-permisos/sin-permisos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListadoProveedoresComponent,
    NavComponent,
    VisualizarProveedorComponent,
    LoadFadeDirective,
    NoEncontradoComponent,
    SinPermisosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
