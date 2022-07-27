import styled from 'styled-components';

export const ProgressText = styled.div`
  margin: 2rem 1rem 1rem;
  margin-top: ${({ marginTop }) => `${marginTop}`};
  font-size: 1.2rem;
  font-weight: 500;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
