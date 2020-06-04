import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-listado-proveedores',
  templateUrl: './listado-proveedores.component.html',
  styleUrls: ['./listado-proveedores.component.scss']
})
export class ListadoProveedoresComponent implements OnInit {

    proveedores: any;
    @ViewChild('container', {static: true}) containerRef: ElementRef; // El elemento del DOM en esa propiedad

    constructor(private proveedoresService: ProveedoresService) { }

    ngOnInit() {
        this.proveedores = this.proveedoresService.getProveedores();
        setTimeout(() => {
            this.containerRef.nativeElement.classList.add('show');
        }, 10)
    }

}
