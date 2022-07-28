import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import { AppContext } from '../../contexts/app.contex';
import { Header, ButtonGroup, ContentBox, ContentWrapper } from '../../styles/common.component';
import RenderHTML from '../../utils/sanitizeHTML.utils';
import { ProgressText } from '../quiz/quiz.styles';
import { ResultIcon, ResultRow } from './results.styles';

const Results = () => {
  const navigate = useNavigate();
  const { questions, resetState } = useContext(AppContext);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!questions) {
      navigate('/');
    } else {
      const scoreCounter = questions.reduce(
        (acc, question) =>
          question.correct_answer.toLowerCase() === question.user_answer ? acc + 1 : acc,
        0
      );
      setScore(scoreCounter);
    }
  }, [questions]);

  const handleClick = () => {
    resetState();
  };

  return (
    <ContentWrapper>
      {questions && (
        <ContentBox>
          <Header>You scored</Header>
          <ProgressText marginTop="0">{`${score} of ${questions.length}`}</ProgressText>
          <div>
            {questions.map((question, key) => {
              return (
                <ResultRow key={key}>
                  <ResultIcon>
                    {question.correct_answer.toLowerCase() === question.user_answer ? '✅' : '⛔️'}
                  </ResultIcon>
                  <div>
                    <RenderHTML html={question.question} />
                  </div>
                </ResultRow>
              );
            })}
          </div>
          <ButtonGroup>
            <Button buttonType={BUTTON_TYPE_CLASSES.beginButton} onClick={handleClick}>
              PLAY AGAIN?
            </Button>
          </ButtonGroup>
        </ContentBox>
      )}
    </ContentWrapper>
  );
};

export default Results;
