import { createContext, useReducer } from 'react';

import { getQuestionsService } from '../utils/services.utils';
import { createAction } from '../utils/create-action.utils';
import { APP_ACTION_TYPES } from './app.actions';
import { AppReducer } from './app.reducer';

export const AppContext = createContext();

export const INITIAL_STATE = {
  questions: null,
  currentQuestionIndex: 0,
  isLoading: true
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
