export const SAVE_STEP_DATA = 'SAVE_STEP_DATA';
export const RESET_STEP_DATA = 'RESET_STEP_DATA';
export const LOAD_PROJECTS = 'LOAD_PROJECTS';

export const saveStepData = (step, data) => ({
  type: SAVE_STEP_DATA,
  payload: { step, data },
});

export const resetStepData = () => ({
  type: RESET_STEP_DATA,
});

export const loadProjects = (projects) => ({
  type: LOAD_PROJECTS,
  payload: projects,
});
