import { Routes } from '@angular/router';
import { IcedCoffeeComponent } from './components/iced-coffee/iced-coffee.component';
import { HotCoffeeComponent } from './components/hot-coffee/hot-coffee.component';

export const routes: Routes = [
    {path: '', component: IcedCoffeeComponent},
    {path: 'iced', component: IcedCoffeeComponent},
    {path: 'hot', component: HotCoffeeComponent},
];
