import { ContentContainer, ContentText } from './card.styles';

const Card = ({ primaryContent = '', secondaryContent = '' }) => {
  return (
    <ContentContainer>
      <ContentText>{primaryContent}</ContentText>
      <ContentText>{secondaryContent}</ContentText>
    </ContentContainer>
  );
};

export default Card;
