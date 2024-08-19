import classNames from 'classnames';
import { Button } from '../../ui/Button/Button';
import { Container } from '../Container/Container';
import s from './Achievement.module.scss';

export const Achievement = ({ number, title, descr, children, className, noContainer }) => {
  return (
    <div className={classNames(s.achievement, className)}>
      <Container className={classNames(s.achievementContainer, noContainer ? "no-container" : '')}>
        <div className={s.about}>
          <span className={s.number}>{number}</span>
          <h2 className={s.title}>{title}</h2>
          <p className={s.descr}>{descr}</p>
        </div>

        {children}

        <Button className={s.button} to='/1'>Оставить заявку на консультацию</Button>
      </Container>
    </div>
  );
};
