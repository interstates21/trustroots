// External dependencies
import classnames from 'classnames';
import { FC } from 'react';

export type IconSize = 'lg' | '2x' | '3x' | '4x' | '5x';

const Icon: FC<{
  className: string;
  icon: string;
  fixedWidth?: boolean;
  size: IconSize;
}> = ({ className, icon, fixedWidth = false, size }) => {
  return (
    <i
      className={classnames('icon', `icon-${icon}`, className, {
        'icon-fw': fixedWidth,
        'icon-lg': size === 'lg',
        'icon-2x': size === '2x',
        'icon-3x': size === '3x',
        'icon-4x': size === '4x',
        'icon-5x': size === '5x'
      })}
    />
  );
};

export default Icon;
