import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConfigurationModule } from '../../core/app-configuration';
import { GameFeatureComponent } from './game-feature.component';
import { BoxScoreModule } from './modules/box-score';
import { GameModule } from './modules/game';
import { RosterModule } from './modules/roster';

describe('GameFeatureComponent', () => {
  let component: GameFeatureComponent;
  let fixture: ComponentFixture<GameFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameFeatureComponent],
      imports: [HttpClientTestingModule, AppConfigurationModule, RosterModule, GameModule, BoxScoreModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
