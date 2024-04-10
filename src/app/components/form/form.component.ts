import { Component, EventEmitter, Output } from '@angular/core';
import { Products } from '../../interfaces/products-interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output()
  public addingNewProduct: EventEmitter<Products> = new EventEmitter();

  public products: Products = {
    name: '',
    quantity: 0,
    subtotal: 0,
    price: 0,
    itbis: 0,
    total: 0
  }

  emitProduct(): void {
    if (this.products.name.length === 0 || isNaN(this.products.quantity) || isNaN(this.products.price)) return;
    this.addingNewProduct.emit(this.products);//Evitar que cambie el original
    this.products = { name: '', quantity: 0, subtotal: 0, price: 0, itbis: 0, total: 0 }
  }
}
