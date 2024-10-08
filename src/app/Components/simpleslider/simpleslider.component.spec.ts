import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplesliderComponent } from './simpleslider.component';

describe('SimplesliderComponent', () => {
  let component: SimplesliderComponent;
  let fixture: ComponentFixture<SimplesliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimplesliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
