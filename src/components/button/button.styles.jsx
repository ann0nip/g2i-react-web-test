import styled from 'styled-components';

export const BaseButton = styled.button`
  background-color: #ffffff;
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-family: Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-seri;
  font-size: 1.5rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 100%;
  max-width: 460px;
  position: relative;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:focus {
    outline: 0;
  }

  &:after {
    content: '';
    position: absolute;
    border: 1px solid #000000;
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
  }

  &:hover:after {
    bottom: 2px;
    left: 2px;
  }

  @media (min-width: 768px) {
    .button-53 {
      padding: 0.75rem 3rem;
      font-size: 1.25rem;
    }
  }
`;

export const BeginButton = styled(BaseButton)`
  background-color: #ffb100;
  transform: rotate(-2deg);
`;
