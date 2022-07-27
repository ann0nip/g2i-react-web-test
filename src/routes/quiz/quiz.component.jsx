import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import Card from '../../components/card/card.component';
import { AppContext } from '../../contexts/app.contex';
import { Header, ButtonGroup, ContentBox, ContentWrapper } from '../../styles/common.component';
import { ProgressText, SpinnerContainer } from './quiz.styles';

const Quiz = () => {
  const navigate = useNavigate();
  const { questions, currentQuestionIndex, updateQuestions } = useContext(AppContext);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    if (!questions) {
      navigate('/');
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [questions]);

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex === questions.length) {
      navigate('/results');
    }
  }, [currentQuestionIndex]);

  const handleResponse = (value) => {
    let questionsWithAnswer = [...questions];
    questionsWithAnswer[currentQuestionIndex].user_answer = value;
    updateQuestions(questionsWithAnswer);
  };
  return (
    <ContentWrapper>
      {!currentQuestion && (
        <SpinnerContainer>
          <ReactLoading type={'bubbles'} color={'#279af1'} height={300} width={150} />
        </SpinnerContainer>
      )}
      {currentQuestion && (
        <ContentBox>
          <Header>{currentQuestion.category}</Header>
          <Card primaryContent={currentQuestion.question} />
          <ProgressText>{`${currentQuestionIndex + 1} of ${questions.length}`}</ProgressText>
          <ButtonGroup>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.trueButton}
              onClick={() => handleResponse('true')}>
              True
            </Button>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.falseButton}
              onClick={() => handleResponse('false')}>
              False
            </Button>
          </ButtonGroup>
        </ContentBox>
      )}
    </ContentWrapper>
  );
};

export default Quiz;
