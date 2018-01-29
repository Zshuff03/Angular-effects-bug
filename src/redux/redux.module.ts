
import { environment } from 'environments/environment';

export interface AppState {
  mainState: Object,
}

@NgModule({
  imports: [
    EffectsModule.forRoot([RevisionsEffects]),
    StoreModule.forRoot({
      articles: mainState.reduce,
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
  ],
})
export class ReduxModule { }