import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmarkCircle,
  faMagnifyingGlass,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import { PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
  const [accountsList, setAccountsList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setAccountsList([1, 2, 3]);
    }, 0);
  });

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="logo" />
        <Tippy
          interactive
          visible={accountsList.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                {
                  <div>
                    <span className={cx('search-title')}>Accounts</span>
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                  </div>
                }
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input
              placeholder="Search accounts and videos"
              spellCheck="false"
            />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faXmarkCircle} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('actions')}>
          <Button>button</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
