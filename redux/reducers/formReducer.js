const initialState = {
  stepOne: {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  },
  stepTwo: {},
  stepThree: {},
  stepFour: { photos: [] },
  stepFive: {},
  projects: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_STEP_DATA':
      return {
        ...state,
        [action.payload.step]: {
          ...state[action.payload.step],
          ...action.payload.data,
        },
      };
    case 'RESET_STEP_DATA':
      return { ...initialState };
    case 'ADD_PROJECT':
      return { ...state, projects: action.payload };
    case 'LOAD_PROJECTS':
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};

export default formReducer;