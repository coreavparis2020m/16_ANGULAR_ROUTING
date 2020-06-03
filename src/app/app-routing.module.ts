import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoProveedoresComponent } from './proveedores/listado-proveedores/listado-proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { VisualizarProveedorComponent } from './proveedores/visualizar-proveedor/visualizar-proveedor.component';

const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'proveedores', component: ListadoProveedoresComponent},
    {path: 'visualizar-proveedor', component: VisualizarProveedorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
