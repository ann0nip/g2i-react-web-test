import { APP_ACTION_TYPES } from './app.actions';
import { INITIAL_STATE } from './app.contex';

export const AppReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case APP_ACTION_TYPES.SET_QUESTIONS:
      return { ...state, questions: payload };
    case APP_ACTION_TYPES.UPDATE_QUESTIONS_W_ANSWERS:
      return { ...state, questions: payload, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case APP_ACTION_TYPES.SET_LOADING_STATUS:
      return { ...state, isLoading: payload };
    case APP_ACTION_TYPES.RESET:
      return { ...INITIAL_STATE };
    default:
      throw new Error(`Unhandled type ${type} in AppReducer`);
  }
};
