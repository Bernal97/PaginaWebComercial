import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsCreditCardComponent } from './modals-credit-card.component';

describe('ModalsCreditCardComponent', () => {
  let component: ModalsCreditCardComponent;
  let fixture: ComponentFixture<ModalsCreditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsCreditCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
