import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  flex-grow: 0;
`;
export const HeaderTitle = styled.h1`
  font-weight: 800;
  text-transform: uppercase;
  text-shadow: 0 0 2px black;
  color: #ffffff;
  margin: 1rem;
`;

export const ButtonActions = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
