import { Logo } from '../Logo/Logo';
import { Container } from '../Container/Container';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button/Button';
import { Flag } from '../../ui/Flag/Flag';
import { Menu } from '../../ui/Menu/Menu';

import s from './Header.module.scss';
import { useState } from 'react';

export const Header = () => {
  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown(!isShown);
  }

  return (
    <header className={s.header}>
      <nav className={s.navigation}>
        <Container className={s.headerContainer}>
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
            <Button variation='extra' tag={"button"} className={s.langBtn}>
              <Flag />
              RU
            </Button>

            <Button variation='extra' to="/1" className={s.partnershipBtn}>
              Стать партнером
            </Button>

            <Menu isShown={isShown} onClick={handleClick} />
          </div>
        </Container>
      </nav>
    </header>
  );
};
