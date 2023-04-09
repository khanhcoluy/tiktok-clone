import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmarkCircle,
  faMagnifyingGlass,
  faSpinner,
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
} from '@fortawesome/free-solid-svg-icons';

import { PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Menu } from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  { icon: <FontAwesomeIcon icon={faEarthAsia} />, title: 'English' },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/help',
  },
  { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcut' },
];

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
          <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} secondary>
            Upload
          </Button>
          <Button primary>Login</Button>
          <Menu items={MENU_ITEMS}>
            <button className={cx('header-more-item-icon')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
