import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopReservationsComponent } from './top-reservations.component';

describe('TopReservationsComponent', () => {
  let component: TopReservationsComponent;
  let fixture: ComponentFixture<TopReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
