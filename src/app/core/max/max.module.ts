import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaxPipe } from './max.pipe';

@NgModule({
  declarations: [MaxPipe],
  imports: [CommonModule],
  exports: [MaxPipe],
})
export class MaxModule {}
