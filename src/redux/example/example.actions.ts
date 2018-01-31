import { Action } from '@ngrx/store';

export const TRIGGER = '[Example] Trigger';
export const RESULT =  '[Example] Result';


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class TriggerAction implements Action {
  readonly type = TRIGGER;

  constructor(public payload: string) { }
}

export class ResultAction implements Action {
  readonly type = RESULT;

  constructor(public payload: string) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = TriggerAction
  | ResultAction;
