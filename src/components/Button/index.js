import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  secondary = false,
  outline = false,
  children,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  const props = {
    onClick,
    ...passProps,
  };

  let Comp = 'button';

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    primary,
    secondary,
    outline,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('btn-label')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
