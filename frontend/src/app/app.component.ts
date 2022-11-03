import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Inicio', url: '/home', icon: 'home'},
    { title: 'Contacto', url: '/contacto', icon: 'person'},
    { title: 'Calendario', url: '/calendario', icon: 'calendar'}


  ];
  constructor() {}
}
/*export class InsertarPage implements OnInit {
  textoBuscar: any;

  constructor() { }

  ngOnInit() {
  }
  onClick(){  
  }
  onSearchChange(event){
    this.textoBuscar = event.datail.value;
  }

} 
**/