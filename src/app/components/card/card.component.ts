import { Component, Input } from '@angular/core';
import { CardI } from 'src/app/models/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() cardItem: CardI;
  @Input() typeOfCards: string;
}
