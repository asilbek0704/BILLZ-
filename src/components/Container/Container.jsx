import classNames from 'classnames';
import s from './Container.module.scss';

export const Container = ({ children, className, onClick }) => (
  <div className={classNames(s.container, className)} onClick={onClick}>
    {children}
  </div>
);
