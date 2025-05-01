import { Component, ElementRef, ViewChild, ChangeDetectorRef, Input  } from '@angular/core';
import { CardComponent } from './card/card.component';
import { FeaturedCardComponent } from './featured-card/featured-card.component';
import { ObjectivesService } from '../../../services/objectives.service';
import { ProductModel } from '../../../models/card-model'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cards-section',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    FeaturedCardComponent
  ],
  templateUrl: './cards-section.component.html',
  styleUrl: './cards-section.component.scss'
})
export class CardsSectionComponent {

  @ViewChild('slider') sliderScroll!: ElementRef | null;
  

  products: ProductModel[] = [];

  selectedProducts: ProductModel[] = [];

  constructor(private cdr: ChangeDetectorRef, private objectivesService: ObjectivesService) {}

  ngOnInit(): void {
    this.objectivesService.getProducts().subscribe(
      (productsFromService: any) => {
        this.products = productsFromService.listCard.map(
          (item: any) => (
            {
              name: item.nameProduct,
              number: item.numberProduct,
              balance: item.balanceProduct,
              detail: item.detaildProduct
            }
          )
        );
      }
    );
  }

  scrollTimeout: any;

  scroll(amount: number): void {
    if (this.sliderScroll) {
      this.sliderScroll.nativeElement.scroll({
        left: this.sliderScroll.nativeElement.scrollLeft + (amount * 316),
        behavior: 'smooth'
      });
  
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
  
      this.scrollTimeout = setTimeout(() => {
        this.cdr.detectChanges();
        this.scrollTimeout = null; 
      }, 300);
    }
  }

  toggleSelection(interactedProduct: ProductModel) {
    const index = this.selectedProducts.findIndex(product => product === interactedProduct);
    
    if (index !== -1) {
      this.selectedProducts.splice(index, 1);
    } else {
      this.selectedProducts.push(interactedProduct);
    }
  }
  
}
