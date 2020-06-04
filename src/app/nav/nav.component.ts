import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  rol: string;
  
  constructor() { }

  ngOnInit() {
      this.rol = JSON.parse(localStorage.getItem('user')).rol;
      console.log(this.rol);
  }

}
