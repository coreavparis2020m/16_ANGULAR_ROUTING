import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoProveedoresComponent } from './proveedores/listado-proveedores/listado-proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { VisualizarProveedorComponent } from './proveedores/visualizar-proveedor/visualizar-proveedor.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { RolesGuard } from './guards/roles.guard';
import { SinPermisosComponent } from './sin-permisos/sin-permisos.component';

const routes: Routes = [
    {path: '', component: InicioComponent},
    {
        path: 'proveedores', 
        component: ListadoProveedoresComponent, 
        data: {titulo: 'Listado de Proveedores Nacionales'}, 
        canActivate: [RolesGuard]
    },
    {
        path: 'visualizar-proveedor/:id', 
        component: VisualizarProveedorComponent, 
        data: {titulo: 'Detalle de Proveedor'}, 
        canActivate: [RolesGuard]
    },
    {path: 'sin-permisos', component: SinPermisosComponent},
    {path: '**', component: NoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
