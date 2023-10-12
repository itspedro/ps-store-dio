import { Component, Input, OnInit } from '@angular/core';
import { CardData } from './card-data-type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  cardData: CardData = {
    title: 'Battlefield V',
    label: 'Label',
    value: 'R$ 0,00',
    type: 'Digital PS4',
    cover: '../../../assets/bt-5.jpg',
  };

  constructor() {}

  ngOnInit(): void {}
}
