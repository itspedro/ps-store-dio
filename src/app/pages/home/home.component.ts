import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards = [
    {
      title: "Battlefield V",
      label: "Lançamento",
      value: "R$ 199,90",
      type: "Jogo Completo | PS5",
      cover: "../../../assets/bt-5.jpg"
    },
    {
      title: "Assasin's Creed",
      label: "Exclusivo",
      value: "R$ 149,90",
      type: "Jogo Completo | PS4",
      cover: "../../../assets/ac-cover.jpg"
    },
    {
      title: "Battlefield I",
      label: "Digital",
      value: "R$ 129,90",
      type: "Digital | PS4",
      cover: "../../../assets/bt-1.jpg"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
