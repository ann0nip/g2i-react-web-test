import { createContext, useReducer } from 'react';

import { getQuestionsService } from '../utils/services.utils';

import { createAction } from '../utils/create-action.utils';

export const AppContext = createContext();

// const gameState = {
//     isGameLoading: false,
//     questions: [],
//     totalScore: 0,
//     currentQuestionIndex: 0,
//     currentQuestion: '',
//     currentCategory: '',
//     userAnswers: [],
//     error: null
//   };

export const APP_ACTION_TYPES = {
  SET_QUESTIONS: 'SET_QUESTIONS'
};

const INITIAL_STATE = {
  questions: null,
  currentQuestionIndex: 0
};

const AppReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case APP_ACTION_TYPES.SET_QUESTIONS:
      return { ...state, questions: payload };
    default:
      throw new Error(`Unhandled type ${type} in AppReducer`);
  }
};

export const AppProvider = ({ children }) => {
  const [{ questions, currentQuestionIndex }, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  const setQuestions = (values) => dispatch(createAction(APP_ACTION_TYPES.SET_QUESTIONS, values));

  const getQuestions = async () => {
    const { results } = await getQuestionsService();
    setQuestions(results);
  };

  const value = { questions, getQuestions, currentQuestionIndex };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
