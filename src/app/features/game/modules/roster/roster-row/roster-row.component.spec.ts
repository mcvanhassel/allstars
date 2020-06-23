import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterRowComponent } from './roster-row.component';

describe('RosterRowComponent', () => {
  let component: RosterRowComponent;
  let fixture: ComponentFixture<RosterRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RosterRowComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
