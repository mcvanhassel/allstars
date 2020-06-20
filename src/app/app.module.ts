import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppConfigurationModule } from './core/app-configuration';
import { GameFeatureModule } from './features/game';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppConfigurationModule, GameFeatureModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
