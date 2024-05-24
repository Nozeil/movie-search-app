import { ActionIcon, type ActionIconProps, Stack, type StackProps } from '@mantine/core';
import { type MouseEventHandler, type SVGProps } from 'react';

import styles from './controls.module.css';
import { DownIcon } from './down-icon';
import { UpIcon } from './up-icon';

type ControlsProps = {
  upOnClick?: MouseEventHandler<HTMLButtonElement>;
  downOnClick?: MouseEventHandler<HTMLButtonElement>;
  stackProps?: StackProps;
  actionIconProps?: Pick<ActionIconProps, 'size' | 'variant'>;
  iconProps?: SVGProps<SVGSVGElement>;
};

export const Controls = ({
  stackProps,
  actionIconProps,
  upOnClick,
  downOnClick,
}: ControlsProps) => (
  <Stack gap={2} {...stackProps}>
    <ActionIcon {...actionIconProps} onClick={upOnClick}>
      <UpIcon className={styles.upIcon} />
    </ActionIcon>

    <ActionIcon {...actionIconProps} onClick={downOnClick}>
      <DownIcon className={styles.downIcon} />
    </ActionIcon>
  </Stack>
);
