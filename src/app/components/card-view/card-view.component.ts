import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  name: string;
  imageUrl: string;
  text: string;
  typeOfCards: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.route.queryParamMap.subscribe(params => {
      this.typeOfCards = params.get('typeOfCards');
      this.imageUrl = params.get('imageUrl');
      this.text = params.get('text');
    });
  }
}
