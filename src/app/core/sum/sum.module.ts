import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SumPipe } from './sum.pipe';

@NgModule({
  declarations: [SumPipe],
  imports: [CommonModule],
  exports: [SumPipe],
})
export class SumModule {}
