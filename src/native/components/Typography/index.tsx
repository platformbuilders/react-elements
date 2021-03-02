import React, { FC } from 'react';
import { TypographyType } from '../../types';
import { Text } from './styles';

const Typography: FC<TypographyType> = ({
  style = [{}],
  textRef = React.createRef(),
  variant = 'body',
  children,
  id,
  accessibility,
  ...rest
}) => (
  <Text
    testID={id || accessibility}
    accessibility={accessibility}
    accessibilityLabel={accessibility}
    ref={textRef}
    style={style}
    variant={variant}
    {...rest}
  >
    {children}
  </Text>
);

export default Typography;
