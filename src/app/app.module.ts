import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoProveedoresComponent } from './proveedores/listado-proveedores/listado-proveedores.component';
import { NavComponent } from './nav/nav.component';
import { VisualizarProveedorComponent } from './proveedores/visualizar-proveedor/visualizar-proveedor.component';
import { LoadFadeDirective } from './directivas/load-fade.directive';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListadoProveedoresComponent,
    NavComponent,
    VisualizarProveedorComponent,
    LoadFadeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
