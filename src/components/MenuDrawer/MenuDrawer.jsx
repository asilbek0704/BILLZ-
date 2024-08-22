import { Container } from '../Container/Container';
import { Button } from '../../ui/Button/Button';
import s from './MenuDrawer.module.scss';
import classNames from 'classnames';
import { useLayoutEffect } from 'react';
import { scrollToSection } from '../../helpers/scrollToSection';

export const MenuDrawer = ({ isOpen, onClick: handleClick }) => {
  useLayoutEffect(() => {
    if (isOpen) {
      document.querySelector('html').style.overflowY = 'hidden';
    } else {
      document.querySelector('html').style.overflowY = 'scroll';
    }
  }, [isOpen]);

  return (
    <div
      onClick={handleClick}
      className={classNames(s.drawer, isOpen ? s.show : null)}
    >
      <Container
        onClick={e => {
          e.stopPropagation();
        }}
        className={s.drawerContainer}
      >
        <Button
          onClick={() => {
            scrollToSection('#automation-section');
            handleClick();
          }}
          to='#automation-section'
          variation='extra'
          className={s.button}
        >
          Потенциал рынка
        </Button>

        <Button
          onClick={() => {
            scrollToSection('#reason-section');
            handleClick();
          }}
          to='#reason-section'
          variation='extra'
          className={s.button}
        >
          Почему BILLZ?
        </Button>

        <Button
          onClick={() => {
            scrollToSection('#partnership-section');
            handleClick();
          }}
          to='#partnership-section'
          variation='extra'
          className={s.button}
        >
          Типы партнерства
        </Button>
      </Container>
    </div>
  );
};
