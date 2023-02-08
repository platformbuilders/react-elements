import { FC } from 'react';
import { ButtonProps } from '../../types';
import { ButtonWrapper, Icon, Loading, TextButton, Touchable } from './styles';

const Button: FC<ButtonProps> = ({
  id,
  children,
  onPress,
  accessibility,
  textStyle = {},
  disabled = false,
  rounded = false,
  loading = false,
  contrast = false,
  hasBorder = false,
  variant = 'primary',
  typographyVariant = 'md',
  rightIconName,
  leftIconName,
  className,
  ...rest
}) => {
  return (
    <Touchable
      id={id || accessibility}
      accessibility={accessibility}
      disabled={loading || disabled}
      className={className}
      onPress={onPress}
    >
      <ButtonWrapper
        hasBorder={hasBorder}
        buttonVariant={variant}
        disabled={disabled}
        rounded={rounded}
        {...rest}
      >
        {loading && <Loading contrast={contrast} />}
        {!loading && (
          <>
            {!!leftIconName && (
              <Icon accessibility="" name={leftIconName as string} leftIcon />
            )}
            <TextButton
              style={textStyle}
              disabled={disabled}
              variant={typographyVariant}
              buttonVariant={variant}
            >
              {children}
            </TextButton>
            {!!rightIconName && (
              <Icon accessibility="" name={rightIconName as string} rightIcon />
            )}
          </>
        )}
      </ButtonWrapper>
    </Touchable>
  );
};

export default Button;
