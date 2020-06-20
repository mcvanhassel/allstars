import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RosterComponent } from './roster.component';

@NgModule({
  declarations: [RosterComponent],
  imports: [CommonModule],
  exports: [RosterComponent],
})
export class RosterModule {}
