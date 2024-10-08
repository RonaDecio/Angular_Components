import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorchangerComponent } from './colorchanger.component';

describe('ColorchangerComponent', () => {
  let component: ColorchangerComponent;
  let fixture: ComponentFixture<ColorchangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorchangerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorchangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
