import { ContentContainer } from './card.styles';
import RenderHTML from '../../utils/sanitizeHTML.utils';

const Card = ({ primaryContent = '', secondaryContent = '' }) => {
  return (
    <ContentContainer>
      <RenderHTML html={primaryContent} />
      <RenderHTML html={secondaryContent} />
    </ContentContainer>
  );
};

export default Card;
