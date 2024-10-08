import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterreplacerComponent } from './letterreplacer.component';

describe('LetterreplacerComponent', () => {
  let component: LetterreplacerComponent;
  let fixture: ComponentFixture<LetterreplacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LetterreplacerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterreplacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
