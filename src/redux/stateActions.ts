import { Action } from '@ngrx/store';

export class StateActions {
	static basicAction(): any {
		return {
			type: 'ANY_ACTION',
		}
	}
	static middleWareAction(): any {
		return {
			type: 'MIDDLEWARE_ACTION',
		}
	}

}