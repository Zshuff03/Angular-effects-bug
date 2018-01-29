import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';



import { StateActions } from './stateActions';

@Injectable()
export class Effects {

  @Effect()
  public changeAction$: Observable<Action> = this.actions$.ofType('ANY_ACTION')
    .mergeMap((action: Action) => {
      const fetchAction: ActionWithPayload<RevisionsFetchPayload> = <ActionWithPayload<RevisionsFetchPayload>>action;

      return this.revisionsService.getRevisionsForId(fetchAction.payload.id)
        .map(() => StateActions.action())
    });


  constructor(
    private actions$: Actions
  ) {}
}
