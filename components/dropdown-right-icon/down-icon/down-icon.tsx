import classNames from 'classnames/bind';
import { type SVGProps } from 'react';

import styles from './down-icon.module.css';

const cx = classNames.bind(styles);

export const DownIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    className={cx(styles.icon, className)}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path strokeLinecap="round" strokeWidth={1.5} d="m5 9 6.22 5.33a1.2 1.2 0 0 0 1.56 0L19 9" />
  </svg>
);
export default DownIcon;
