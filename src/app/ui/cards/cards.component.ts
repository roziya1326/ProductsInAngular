import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { BtnComponent } from '../btn/btn.component';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardComponent {
  @Input() item: Product = {} as Product;
  @Output() productSelected = new EventEmitter<Product>();

  onOrderNowClicked() {
    this.productSelected.emit(this.item);
  }
}
