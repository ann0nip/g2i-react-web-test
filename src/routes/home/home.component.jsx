import { useNavigate } from 'react-router-dom';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import Card from '../../components/card/card.component';
import { Header, ButtonGroup, ContentBox, ContentWrapper } from '../../styles/common.component';
import { HeaderTitle } from './home.styles';
('./home.styles.jsx');

const primaryText = `You will be presented with 10 True or False questions.`;
const secondaryText = `Can you score 100%?`;

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/quiz');
  };
  return (
    <ContentWrapper>
      <ContentBox>
        <Header>
          <span>Welcome to the </span>
          <HeaderTitle>
            <span>Trivia</span>
            <span> Challenge!</span>
          </HeaderTitle>
        </Header>
        <Card primaryContent={primaryText} secondaryContent={secondaryText} />
        <ButtonGroup>
          <Button buttonType={BUTTON_TYPE_CLASSES.beginButton} onClick={handleClick}>
            BEGIN
          </Button>
        </ButtonGroup>
      </ContentBox>
    </ContentWrapper>
  );
};

export default Home;
