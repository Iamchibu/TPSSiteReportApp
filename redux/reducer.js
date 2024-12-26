import { SAVE_STEP_DATA, RESET_STEP_DATA, LOAD_PROJECTS } from './actions';

const initialState = {
  stepData: {
    one: {},
    two: {},
    three: {},
    four: [],
  },
  projects: [],
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_STEP_DATA:
      return {
        ...state,
        stepData: {
          ...state.stepData,
          [action.payload.step]: action.payload.data,
        },
      };
    case RESET_STEP_DATA:
      return {
        ...state,
        stepData: initialState.stepData,
      };
    case LOAD_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
};
