import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {

    rol: string;

    constructor(private router: Router) {
        this.rol = JSON.parse(localStorage.getItem('user')).rol;
    }
  
    canActivate(): boolean {

        if (this.rol === 'financial') {
            return true;
        } else {
            this.router.navigate(['/sin-permisos']);
            return false;
        }   
    }
  
}
