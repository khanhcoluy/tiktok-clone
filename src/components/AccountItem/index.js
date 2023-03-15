import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_300x300.webp?x-expires=1678978800&x-signature=mTohz19kIjfPB88eu5DE%2FazRj74%3D"
        alt="avatar"
      />
      <div className={cx('info')}>
        <h4>
          <span className={cx('user-name')}>hoa_2032</span>
          <FontAwesomeIcon
            className={cx('verified-user-icon')}
            icon={faCheckCircle}
          />
        </h4>
        <p className={cx('name')}>Ngọc Hoa</p>
      </div>
    </div>
  );
}

export default AccountItem;
