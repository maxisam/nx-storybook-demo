import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SomethingComponent } from './something/something.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SomethingComponent],
  exports: [SomethingComponent],
})
export class SharedComponentModule {}
