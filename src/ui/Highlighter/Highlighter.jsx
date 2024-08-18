import classNames from 'classnames';
import s from './Highlighter.module.scss';

export const Highlighter = ({ children: text, className }) => (
  <span className={classNames(s.highlighted, className)}>{text}</span>
);
