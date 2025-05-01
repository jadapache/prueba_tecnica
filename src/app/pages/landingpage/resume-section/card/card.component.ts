import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NumberUtils } from '../../../../utils/number.utils';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [

  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {


  numberUtils: NumberUtils = new NumberUtils();

  scrollToCards(){
    if (document.getElementById("cards")) {
      window.scrollTo({
        top: document.getElementById("cards")!.offsetTop - 80,
        behavior: "smooth"
      });
    }
    
    
  }

}
