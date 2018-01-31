
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import * as example from './example';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export interface AppState {
  example: example.State,
}

@NgModule({
  imports: [
    EffectsModule.forRoot([example.ExampleEffects]),
    StoreModule.forRoot({
      example: example.reducer,
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
  ],
})
export class ReduxModule { }
