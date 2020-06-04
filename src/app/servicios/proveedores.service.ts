import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

    proveedores = [
        {id: '1', nombre: 'Iberdrola S.A.U.', cif: 'A12345678', localidad: 'Bilbao'},
        {id: '2', nombre: 'Telefónica S.A.U.', cif: 'A87654321', localidad: 'Madrid'},
        {id: '3', nombre: 'Virgin Teleco S.A.U.', cif: 'A432154321', localidad: 'Madrid'},
        {id: '4', nombre: 'Planeta D\'Agostini S.A.U.', cif: 'A67543212', localidad: 'Barcelona'}
    ]

    constructor() { }

    getProveedores() {
        return this.proveedores;
    }

    getProveedor(id) {
        let proveedor = this.proveedores.find(elem => {
            return elem.id === id;
        });
        return proveedor;
    }

}
