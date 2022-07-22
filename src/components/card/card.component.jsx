import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { ContentActions, ContentContainer, ContentText } from './card.styles';

const Card = ({ primaryContent = '', secondaryContent = '', enableActions = false }) => {
  return (
    <ContentContainer>
      <ContentText>{primaryContent}</ContentText>
      <ContentText>{secondaryContent}</ContentText>
      {enableActions && (
        <ContentActions>
          <Button buttonType={BUTTON_TYPE_CLASSES.trueButton}>True</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.falseButton}>False</Button>
        </ContentActions>
      )}
    </ContentContainer>
  );
};

export default Card;
