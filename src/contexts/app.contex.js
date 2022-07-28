import { createContext, useReducer } from 'react';

import { getQuestionsService } from '../utils/services.utils';

import { createAction } from '../utils/create-action.utils';

export const AppContext = createContext();

export const APP_ACTION_TYPES = {
  SET_QUESTIONS: 'SET_QUESTIONS',
  SET_LOADING_STATUS: 'SET_LOADING_STATUS',
  UPDATE_QUESTIONS_W_ANSWERS: 'UPDATE_QUESTIONS_W_ANSWERS',
  RESET: 'RESET'
};

const INITIAL_STATE = {
  questions: null,
  currentQuestionIndex: 0,
  isLoading: true
};

const AppReducer = (state, action) => {
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

export const AppProvider = ({ children }) => {
  const [{ questions, currentQuestionIndex, isLoading }, dispatch] = useReducer(
    AppReducer,
    INITIAL_STATE
  );

  const setIsLoading = (value) =>
    dispatch(createAction(APP_ACTION_TYPES.SET_LOADING_STATUS, value));

  const setQuestions = (values) => dispatch(createAction(APP_ACTION_TYPES.SET_QUESTIONS, values));

  const getQuestions = async () => {
    setIsLoading(true);
    const { results } = await getQuestionsService();
    setQuestions(results);
    setIsLoading(false);
  };

  const updateQuestions = (values) =>
    dispatch(createAction(APP_ACTION_TYPES.UPDATE_QUESTIONS_W_ANSWERS, values));

  const resetState = () => dispatch(createAction(APP_ACTION_TYPES.RESET));

  const value = {
    questions,
    getQuestions,
    currentQuestionIndex,
    updateQuestions,
    isLoading,
    setIsLoading,
    resetState
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
