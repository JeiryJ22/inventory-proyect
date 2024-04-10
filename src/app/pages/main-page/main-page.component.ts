import { Component } from '@angular/core';
import { Products } from '../../interfaces/products-interface';
import { ProductService } from '../../services/inventory.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'

})
export class MainPageComponent {

  constructor(private prodService: ProductService) {}

  get products(): Products[] {
    return [...this.prodService.products];
  }

  onDeleteProduct(id: string):void {
    this.prodService.deletingPoductById(id)
  }

  onNewProduct(product: Products) {
    this.prodService.addingNewProductMP(product)
  }

  onTotal = this.prodService.total;
}
