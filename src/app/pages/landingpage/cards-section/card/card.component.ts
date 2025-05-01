import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductModel } from '../../../../models/card-model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() product!: ProductModel;
  @Input() selected!: boolean;
  @Output() onSelected = new EventEmitter<any>();

  toggleCheck(product: ProductModel){
    this.onSelected.emit(product);
  }

  formatNumber(balance: string): string {
    return parseInt(balance).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
