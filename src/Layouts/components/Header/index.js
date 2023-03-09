import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmarkCircle,
  faMagnifyingGlass,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="logo" />
        <div className={cx('search')}>
          <input placeholder="Search accounts and videos" spellCheck="false" />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faXmarkCircle} />
          </button>
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx('actions')}></div>
      </div>
    </div>
  );
}

export default Header;
