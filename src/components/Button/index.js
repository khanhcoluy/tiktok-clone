import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function Button({ to, href, children, onClick, ...passProps }) {
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

  return (
    <Comp {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
