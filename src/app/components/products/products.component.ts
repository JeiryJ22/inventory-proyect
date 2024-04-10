import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from '../../interfaces/products-interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {


  @Input()//Recibe la propiedad de MainPageComponent y se relaciona al html del mismo
  public productsInventory: Products[] = [{
    name: 'Default',
    quantity: 0,
    subtotal: 0,
    price: 0,
    itbis: 0,
    total: 0
  }];

  @Output()
  public onDeleteProduct: EventEmitter<string> = new EventEmitter();

  deleteProduct(id?: string): void {
    if (!id) return;
    this.onDeleteProduct.emit(id)
  }
}

