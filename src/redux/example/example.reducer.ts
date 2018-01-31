import * as example from './example.actions';


export interface State {
  ids: string[];
}

export const initialState: State = {
  ids: [],
};

export function reducer(state = initialState, action: example.Actions): State {
  switch (action.type) {
    case example.TRIGGER:
      return {
        ids: [
          ...state.ids,
          `triggered ${action.payload}`,
        ]
      };

    case example.RESULT:
      return {
        ids: [
          ...state.ids,
          `result ${action.payload}`,
        ]
      };

    default: {
      return state;
    }
  }
}

export const getIds = (state: State) => state.ids;
