import React, { FC } from 'react';
import { CustomTouchable } from './styles';

export type Props = {
  onPress(): void;
  children?: React.ReactNode;
};

const Touchable: FC<Props> = ({ children, onPress, ...rest }) => (
  <CustomTouchable onClick={onPress} {...rest}>
    {children}
  </CustomTouchable>
);

export default Touchable;
