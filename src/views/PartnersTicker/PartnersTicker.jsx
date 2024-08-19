import classNames from 'classnames';
import { Ticker } from '../../components/Ticker/Ticker';
import s from './PartnersTicker.module.scss';

export const PartnersTicker = ({ children, direction, play, className }) => (
  <Ticker className={classNames(s.ticker, className)} direction={direction} play={play}>
    {children}
    {children}
    </Ticker>
);
