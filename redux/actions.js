import AsyncStorage from '@react-native-async-storage/async-storage';

export const SAVE_STEP_DATA = 'SAVE_STEP_DATA';
export const RESET_STEP_DATA = 'RESET_STEP_DATA';
export const ADD_PROJECT = 'ADD_PROJECT';
export const LOAD_PROJECTS = 'LOAD_PROJECTS';

export const saveStepData = (step, data) => ({
  type: SAVE_STEP_DATA,
  payload: { step, data },
});

export const resetStepData = () => ({
  type: RESET_STEP_DATA,
});

export const addProject = (project) => async (dispatch, getState) => {
  try {
    const existingProjects = JSON.parse(await AsyncStorage.getItem('projects')) || [];
    const updatedProjects = [...existingProjects, project];

    await AsyncStorage.setItem('projects', JSON.stringify(updatedProjects));

    dispatch({
      type: ADD_PROJECT,
      payload: updatedProjects,
    });
  } catch (error) {
    console.error('Error saving project:', error);
  }
};

export const loadProjects = () => async (dispatch) => {
  try {
    const projects = JSON.parse(await AsyncStorage.getItem('projects')) || [];
    dispatch({
      type: LOAD_PROJECTS,
      payload: projects,
    });
  } catch (error) {
    console.error('Error loading projects:', error);
  }
};
