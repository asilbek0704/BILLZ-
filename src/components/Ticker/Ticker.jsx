import Marquee from 'react-fast-marquee';
import s from './Ticker.module.scss';
import classNames from 'classnames';

export const Ticker = ({ children, className, direction = "left", play = "true" }) => {
  return (
    <Marquee direction={direction} play={play} className={classNames(s.ticker, className)}>
      {children}
    </Marquee>
  );
};
