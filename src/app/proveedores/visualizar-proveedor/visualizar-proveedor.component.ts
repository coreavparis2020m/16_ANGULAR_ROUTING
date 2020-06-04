import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-visualizar-proveedor',
  templateUrl: './visualizar-proveedor.component.html',
  styleUrls: ['./visualizar-proveedor.component.scss']
})
export class VisualizarProveedorComponent implements OnInit {

    id: string;
    proveedor: any;

    constructor(private route: ActivatedRoute,
                private proveedoresService: ProveedoresService) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.proveedor = this.proveedoresService.getProveedor(this.id);
    }

}
