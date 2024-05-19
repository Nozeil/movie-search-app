import classNames from 'classnames/bind';

import DownIcon from '@/components/dropdown-right-icon/down-icon/down-icon';

import styles from './dropdown-right-icon.module.css';

type DropdownRightIconProps = {
  isOpen: boolean;
};

const cx = classNames.bind(styles);

export const DropdownRightIcon = ({ isOpen }: DropdownRightIconProps) => (
  <DownIcon className={cx(styles.icon, { iconRotateTop: isOpen, iconRotateBottom: !isOpen })} />
);
