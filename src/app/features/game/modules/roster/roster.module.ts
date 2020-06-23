import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RosterRowComponent } from './roster-row/roster-row.component';
import { RosterComponent } from './roster.component';

@NgModule({
  declarations: [RosterComponent, RosterRowComponent],
  imports: [CommonModule],
  exports: [RosterComponent],
})
export class RosterModule {}
