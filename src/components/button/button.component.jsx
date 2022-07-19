import { BaseButton, BeginButton } from './button.styles';

export const BUTTON_TYPE_CLASSES = {
  baseButton: 'baseButton',
  beginButton: 'beginButton'
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.beginButton]: BeginButton
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
