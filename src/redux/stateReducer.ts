import { Action } from '@ngrx/store';

export const initial: any = {
	clicked: false,
};
export class stateReducer {
	static reduce(state: any = initial, action: Action): any {
		
		switch (action.type) {
			case 'ANY_ACTION':
				return {
					clicked: true
				};
			default: 
			return state
		}
	}
}