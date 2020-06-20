import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppConfigurationModule } from 'src/app/core/app-configuration';

import { GameFeatureComponent } from './game-feature.component';
import { RosterModule } from './modules/roster/roster.module';

describe('GameFeatureComponent', () => {
  let component: GameFeatureComponent;
  let fixture: ComponentFixture<GameFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameFeatureComponent],
      imports: [HttpClientTestingModule, AppConfigurationModule, RosterModule],
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
