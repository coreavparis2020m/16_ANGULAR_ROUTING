import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-listado-proveedores',
  templateUrl: './listado-proveedores.component.html',
  styleUrls: ['./listado-proveedores.component.scss']
})
export class ListadoProveedoresComponent implements OnInit {

    proveedores: any;

    constructor(private proveedoresService: ProveedoresService) { }

    ngOnInit() {
        this.proveedores = this.proveedoresService.getProveedores();
    }

}
