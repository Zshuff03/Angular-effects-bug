import 'rxjs/add/operator/mergeMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as example from './example.actions';

@Injectable()
export class ExampleEffects {

  @Effect()
  exampleEffect$: Observable<Action> = this.actions$
    .ofType(example.TRIGGER)
    .mergeMap((action: example.TriggerAction) => {

      return of(new example.ResultAction(action.payload));
    });

  constructor(private actions$: Actions) { }
}
