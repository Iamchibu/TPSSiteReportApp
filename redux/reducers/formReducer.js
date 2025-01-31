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
  stepFour: {},
  stepFive: {}
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_STEP_DATA':
      return {
        ...state,
        [action.payload.step]: {
          ...state[action.payload.step],
          ...action.payload.data // Use spread to merge the new data with the existing data for the specific step
        }
      };
    default:
      return state;
  }
};

export default formReducer;
