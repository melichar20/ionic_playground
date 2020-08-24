import { Component } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  cards: any[];
  brews: Object;
  

  constructor(private _http: HttpService) {}

  ngOnInit() {
    let cards: Object;

    this._http.getMtgCards().subscribe(data => {
      cards = Object.values(data)
      this.cards = cards[0]

      console.log(this.cards);
    });
  }

}
