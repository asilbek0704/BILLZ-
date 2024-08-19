import { Ticker } from '../../components/Ticker/Ticker';
import { Highlighter } from '../../ui/Highlighter/Highlighter';
import s from './ChoiceTicker.module.scss';

export const ChoiceTicker = () => (
  <Ticker className={s.ticker}>
    <p className={s.item}>Почему стоит выбрать <Highlighter>партнерство с BILLZ?</Highlighter>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
    <p className={s.item}>Почему стоит выбрать <Highlighter>партнерство с BILLZ?</Highlighter>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
    <p className={s.item}>Почему стоит выбрать <Highlighter>партнерство с BILLZ?</Highlighter>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
  </Ticker>
);
