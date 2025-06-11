import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Coffee{
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  showDetails: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private iceUrl = "https://api.sampleapis.com/coffee/iced"
  private hotUrl = "https://api.sampleapis.com/coffee/hot"

  constructor(private http: HttpClient) { }

  getIcedCoffee(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.iceUrl).pipe()
  }

  getHotCoffee(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.hotUrl).pipe()
  }

}
