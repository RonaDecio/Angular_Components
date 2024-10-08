import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturealertComponent } from './temperaturealert.component';

describe('TemperaturealertComponent', () => {
  let component: TemperaturealertComponent;
  let fixture: ComponentFixture<TemperaturealertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemperaturealertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperaturealertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
