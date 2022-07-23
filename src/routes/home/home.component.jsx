import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import Card from '../../components/card/card.component';
import { ContentWrapper, ContentBox, Header, HeaderTitle, ButtonActions } from './home.styles';
('./home.styles.jsx');

const primaryText = `You will be presented with 10 True or False questions.`;
const secondaryText = `Can you score 100%?`;

const Home = () => {
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
        <ButtonActions>
          <Button buttonType={BUTTON_TYPE_CLASSES.beginButton}>BEGIN</Button>
        </ButtonActions>
      </ContentBox>
    </ContentWrapper>
  );
};

export default Home;
