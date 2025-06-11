import { Component } from '@angular/core';
import { Coffee, CoffeeService } from '../../services/coffee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hot-coffee',
  imports: [CommonModule],
  templateUrl: './hot-coffee.component.html',
  styleUrl: './hot-coffee.component.scss'
})
export class HotCoffeeComponent {
  coffees: Coffee[] = []

  constructor(private service: CoffeeService){
    this.service.getHotCoffee().subscribe({
      next: (list) => {
        this.coffees = list.map(c => (
          {...c, showDetails: false}))
        console.log(this.coffees)
      },
      error: () => {}
    })
  }

  toggleDetails(id: number) {
    console.log(id)
    this.coffees = this.coffees.map( c => 
      c.id === id ? {...c, showDetails: !c.showDetails} : c
    )
    console.log(this.coffees)
  }
}
