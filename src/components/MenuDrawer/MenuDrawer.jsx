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
      <Container className={s.drawerContainer}>
        <Button
          onClick={() => scrollToSection('#automation-section')}
          to='#automation-section'
          variation='extra'
          className={s.button}
        >
          Потенциал рынка
        </Button>

        <Button
          onClick={() => scrollToSection('#reason-section')}
          to='#reason-section'
          variation='extra'
          className={s.button}
        >
          Почему BILLZ?
        </Button>

        <Button
          onClick={() => scrollToSection('#partnership-section')}
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
