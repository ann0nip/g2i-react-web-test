import { BaseButton, BeginButton, FalseButton, TrueButton } from './button.styles';

export const BUTTON_TYPE_CLASSES = {
  baseButton: 'baseButton',
  beginButton: 'beginButton',
  trueButton: 'trueButton',
  falseButton: 'falseButton'
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.beginButton]: BeginButton,
    [BUTTON_TYPE_CLASSES.trueButton]: TrueButton,
    [BUTTON_TYPE_CLASSES.falseButton]: FalseButton
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
