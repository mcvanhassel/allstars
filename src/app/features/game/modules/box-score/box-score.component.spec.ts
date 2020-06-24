import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxModule } from '../../../../core/max';
import { SumModule } from '../../../../core/sum';
import { BoxScoreComponent } from './box-score.component';

describe('BoxScoreComponent', () => {
  let component: BoxScoreComponent;
  let fixture: ComponentFixture<BoxScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoxScoreComponent],
      imports: [MaxModule, SumModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
