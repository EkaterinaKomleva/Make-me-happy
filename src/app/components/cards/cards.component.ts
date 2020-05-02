import { Component, OnInit } from '@angular/core';
import { HappyDataService } from 'src/app/services/happy-data.service';
import { CardI } from 'src/app/models/card.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {

  cards$: Observable<CardI[]>;
  typeOfCards: string;

  constructor(
    private happyService: HappyDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cards$ = this.route.paramMap.pipe(  // как я поняла, когда в параметры приходит новое значение,
      switchMap((params: ParamMap) => {      //  switchMap отпиcывается от старого и вызывает getCards() для нового значения
        this.typeOfCards = params.get('typeOfCards');
        return this.happyService.getCards(this.typeOfCards);
      }));
  }
}
