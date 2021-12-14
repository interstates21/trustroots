import { FC } from 'react';
import styles from './.module.scss';

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <div>
      <a href="/" className="hidden-xs" aria-hidden="true">
        <img
          className="hidden-xs hidden-sm"
          src="/img/logo/horizontal-white.svg"
          alt="Trustroots"
          width="177"
          height="31"
        />
        {/* <img
          className="hidden-md hidden-lg"
          src="/img/tree-white.svg"
          alt="Trustroots"
          width="31"
          height="31"
        /> */}
      </a>
    </div>
  );
};

export default Logo;
