import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products-interface';
import { v4 as id } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  public total: number = 0;
  public products: Products[] = [
    {
      name: 'Coca cola',
      quantity: 15,
      subtotal: 0,
      price: 25,
      itbis: 0.18,
      total: 0,
      id: id(),
    },
    {
      name: 'Doritos',
      quantity: 2,
      subtotal: 0,
      price: 50,
      itbis: 0.18,
      total: 0,
      id: id(),
    },
  ];

  constructor() {
    this.totalPrice();
    this.totalItbis();
    this.subTotal();
    this.finalTotal();
  }

  totalPrice() {
    this.products.forEach((producto) => {
      producto.total =
        producto.quantity * producto.price * (1 + producto.itbis);
    });
  }

  totalItbis() {
    this.products.forEach((itbis) => {
      itbis.itbis = itbis.quantity * itbis.price * itbis.itbis;
    });
  }

  subTotal() {
    this.products.forEach((sub) => {
      sub.subtotal = sub.price * sub.quantity;
    });
  }

  addingNewProductMP(product: Products): void {
    const newProduct: Products = { ...product, id: id() };
    this.products.push(newProduct);
    this.subTotal();
    this.finalTotal();
    this.finalTotal();
    this.products.forEach((taxes) => {
      //Para que se apliquen al nuevo elemento agregado
      taxes.itbis = taxes.subtotal * 0.18;
      taxes.total = taxes.subtotal + taxes.itbis;
    });
  }

  finalTotal(): void {
    this.products.forEach((product) => {
      product.subtotal = product.price * product.quantity;
      product.itbis = product.subtotal * 0.18;
      product.total = product.subtotal + product.itbis;
    });
    this.total = this.products.reduce(
      (total, product) => total + product.total,0
    );
  }

  deletingPoductById(id: string): void {
    const updateTotal = this.products.find((product) => product.id === id);
    if (updateTotal) {
      this.total -= updateTotal.total;
      this.products = this.products.filter((product) => product.id !== id);
    }
  }

}
