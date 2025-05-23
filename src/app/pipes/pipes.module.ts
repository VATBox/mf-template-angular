import { NgModule } from '@angular/core';
import { RoundNumberPipe } from './roundNumberPipe';
import { PureSlicePipe } from './sliceStringPipe';
import { TruncatePipe } from './truncateText';

@NgModule({
  declarations: [
    PureSlicePipe,
    RoundNumberPipe,
    TruncatePipe,
  ],
  exports: [
    PureSlicePipe,
    RoundNumberPipe,
    TruncatePipe,
  ],
})
export class PipesModule {}
