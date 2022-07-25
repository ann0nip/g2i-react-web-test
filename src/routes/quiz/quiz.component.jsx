import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import Card from '../../components/card/card.component';
import { Header, ButtonGroup, ContentBox, ContentWrapper } from '../../styles/common.component';

const Quiz = () => {
  return (
    <ContentWrapper>
      <ContentBox>
        <Header>Entertainment: Video Games</Header>
        <Card primaryContent={'Unturned originally started as a Roblox game.'} />
        <div>1 of 10</div>
        <ButtonGroup>
          <Button buttonType={BUTTON_TYPE_CLASSES.trueButton}>True</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.falseButton}>False</Button>
        </ButtonGroup>
      </ContentBox>
    </ContentWrapper>
  );
};

export default Quiz;
