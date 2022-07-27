import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: #ffffff;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #279af1;
  padding: 25px 50px 0 50px;
  max-width: 600px;
  align-items: center;
  margin: 0 auto;
`;

export const Header = styled.header`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin: 1rem;
`;

export const ButtonGroup = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
