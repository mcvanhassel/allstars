import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxScoreRowComponent } from './box-score-row.component';

describe('BoxScoreRowComponent', () => {
  let component: BoxScoreRowComponent;
  let fixture: ComponentFixture<BoxScoreRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoxScoreRowComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxScoreRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
