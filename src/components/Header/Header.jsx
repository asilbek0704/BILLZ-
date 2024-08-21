import { Logo } from '../Logo/Logo';
import { Container } from '../Container/Container';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../ui/Button/Button';
import { Flag } from '../../ui/Flag/Flag';
import { Menu } from '../../ui/Menu/Menu';
import { MenuDrawer } from '../../components/MenuDrawer/MenuDrawer';

import { useEffect, useState } from 'react';
import { scrollToSection } from '../../helpers/scrollToSection';
import classNames from 'classnames';

import { AppBar, Slide, useScrollTrigger } from '@mui/material';
import s from './Header.module.scss';

const HideOnScroll = props => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: 120,
  });

  return (
    <Slide
      className={classNames('headerBar', !trigger ? s.header_visible : null)}
      direction='down'
      in={!trigger}
    >
      {children}
    </Slide>
  );
};

export const Header = ({ className }) => {
  const { pathname } = useLocation();
  const [isOpen, setOpen] = useState(false);

  function handleClick() {
    setOpen(!isOpen);
  }

  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={s.divider}></div>

      <HideOnScroll>
        <AppBar>
          <header className={classNames(s.header, className)}>
            <nav className={s.navigation}>
              <Container
                className={classNames(
                  s.headerContainer,
                  hasShadow ? s.hasShadow : null
                )}
              >
                <Logo />

                <ul className={s.list}>
                  <li className={s.item}>
                    <Link to='/' className={s.link}>
                      Потенциал рынка
                    </Link>
                  </li>
                  <li className={s.item}>
                    <Link to='/' className={s.link}>
                      Почему BILLZ?
                    </Link>
                  </li>
                  <li className={s.item}>
                    <Link to='/' className={s.link}>
                      Типы партнерства
                    </Link>
                  </li>
                </ul>

                <div className={s.buttonGroup}>
                  <Button variation='extra' tag='button' className={s.langBtn}>
                    <Flag />
                    RU
                  </Button>

                  <Button
                    variation='extra'
                    to='#partnership-form'
                    onClick={() => scrollToSection('#partnership-form')}
                    className={s.partnershipBtn}
                  >
                    Стать партнером
                  </Button>

                  {pathname != '/application' ? (
                    <Menu isOpen={isOpen} onClick={handleClick} />
                  ) : null}
                </div>
              </Container>
            </nav>
          </header>
        </AppBar>
      </HideOnScroll>

      <MenuDrawer isOpen={isOpen} onClick={handleClick} />
    </>
  );
};
