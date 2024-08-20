import classNames from 'classnames';
import s from './Button.module.scss';
import { Link } from 'react-router-dom';

export const Button = ({ children, variation, className, tag, to, onClick }) => {
  let buttonClass;
  switch (variation) {
    case 'main':
      buttonClass = s.main;
      break;
    case 'extra':
      buttonClass = s.extra;
      break;
    default:
      buttonClass = s.main;
  }

  return (
    <>
      {tag === 'Link' ? (
        <Link onClick={onClick} to={to} className={classNames(buttonClass, className)}>
          {children}
        </Link>
      ) : tag === 'button' ? (
        <button onClick={onClick} className={classNames(buttonClass, className)}>
          {children}
        </button>
      ) : (
        <Link onClick={onClick} to={to} className={classNames(buttonClass, className)}>
          {children}
        </Link>
      )}
    </>
  );
};
