import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcedCoffeeComponent } from './iced-coffee.component';

describe('IcedCoffeeComponent', () => {
  let component: IcedCoffeeComponent;
  let fixture: ComponentFixture<IcedCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcedCoffeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcedCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
