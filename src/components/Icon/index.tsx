import MaterialIcon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

type IconSize = 'inherit' | 'default' | 'small' | 'large';

type IconColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'action'
  | 'error'
  | 'disabled';

export type Props = {
  className?: string;
  name: string;
  size?: IconSize;
  color?: IconColor;
};

const Icon = ({
  className,
  name,
  color = 'inherit',
  size = 'default',
  ...rest
}: Props) => (
  <IconButton className={className} color="inherit" edge="start" {...rest}>
    <MaterialIcon color={color} fontSize={size}>
      {name}
    </MaterialIcon>
  </IconButton>
);

export default Icon;
