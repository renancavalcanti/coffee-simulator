import { Component } from '@angular/core';
import { Coffee, CoffeeService } from '../../services/coffee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iced-coffee',
  imports: [CommonModule],
  templateUrl: './iced-coffee.component.html',
  styleUrl: './iced-coffee.component.scss'
})
export class IcedCoffeeComponent {

  coffees: Coffee[] = []

  constructor(private service: CoffeeService){
    this.service.getIcedCoffee().subscribe({
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
