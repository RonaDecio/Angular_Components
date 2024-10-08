import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorymatchgameComponent } from './memorymatchgame.component';

describe('MemorymatchgameComponent', () => {
  let component: MemorymatchgameComponent;
  let fixture: ComponentFixture<MemorymatchgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemorymatchgameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemorymatchgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
