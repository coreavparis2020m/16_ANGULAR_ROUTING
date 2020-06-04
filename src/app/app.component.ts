import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    user = {nombre: 'Pedro', rol: 'marketing'} // simultanear con el rol 'financial' para comprobar

    ngOnInit() {
        localStorage.setItem('user', JSON.stringify(this.user));
    }

}
