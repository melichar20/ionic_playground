import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getMtgCards() {
    return this.http.get('https://api.magicthegathering.io/v1/cards');
  }
}
