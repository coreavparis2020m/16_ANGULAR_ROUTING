import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-proveedores',
  templateUrl: './listado-proveedores.component.html',
  styleUrls: ['./listado-proveedores.component.scss']
})
export class ListadoProveedoresComponent implements OnInit {

    titulo: string;
    proveedores: any;
    // @ViewChild('container', {static: true}) containerRef: ElementRef; // El elemento del DOM en esa propiedad

    constructor(private proveedoresService: ProveedoresService,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this.proveedores = this.proveedoresService.getProveedores();
        this.titulo = this.route.snapshot.data.titulo;
        // setTimeout(() => {
        //     this.containerRef.nativeElement.classList.add('show');
        // }, 10)
    }

}
