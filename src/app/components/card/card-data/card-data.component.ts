import { Component, Input, OnInit } from '@angular/core';
import { CardData } from '../card-data-type';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.css'],
})
export class CardDataComponent implements OnInit {
  @Input()
  cardData: CardData = {
    title: '',
    label: '',
    value: '',
    type: '',
    cover: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
