import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../services/productos.service';

import { UserCrudService } from './../services/user-crud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  productos: any = [];
  producto: any = [];

  textoBuscar: any;


  //constructor(private router: Router) {}

  constructor(private productosService: ProductosService, private userCrudService: UserCrudService, private router: Router) {}


  ngOnInit(){
    this.getAllProductos();
  }

  getAllProductos(){
    this.productosService.getProductos().subscribe(response =>{
      this.productos = response;
      console.log(response);
    });
  }

  ionViewDidEnter() {
    this.productosService.getProductos().subscribe((response) => {
      this.productos = response;
    })
  }

  deleteProducto(producto) {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      this.userCrudService.deleteUser(producto.idproducto)
      .subscribe(() => {
          this.ionViewDidEnter();
          console.log('Producto eliminado!')
        }
      )
    }
  }
prueba(){console.log("skjhbkgfsdjg")}
  onSearchChange(event){
    this.textoBuscar = event.datail.value;
  }


 
}
